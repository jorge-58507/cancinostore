<?php

namespace App;

use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    public function roles(){
        return $this->belongsToMany('App\role', 'role_users', 'user_id', 'role_id');
    }
    public function checkRole($role_str){
        if ($this->hasAnyRole($role_str)) {
            return true;
        }else{
            return false;
        }
    }
    public function authorizeRole($roles){
        if ($this->hasAnyRole($roles)) {
            return true;
        }
        abort(401,'You are Unauthorized');
    }
    public function hasAnyRole($array_role){
        if (is_array($array_role)) {
            foreach ($array_role as $key => $raw_role) {
                if($this->hasRole($raw_role)){
                    return true;
                }
            } 
        }
         else {
            if($this->hasRole($array_role)){
                return true;
            }
        }
        return false;
        
    }
    public function hasRole($role){
        if ($this->roles()->where('name',$role)->first()) {
            return true;
        }
        return false;
    }
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

                                    // JWT
    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
