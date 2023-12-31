<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use App\role_user;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $answer = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $model_role_user = new role_user;
        $model_role_user->user_id = $answer['id'];
        $model_role_user->role_id = 2;
        $model_role_user->save();

        // ENVIO DEL E-MAIL -------ARREGLAR LA DIRECCION URL
        // the message
                    // $msg = "Usted esta recibiendo este correo ya que decidió registrarse en la tienda de Jade Café, para verificar la cuenta haga click en el siguiente enlace <a href='direccionurl.com/verify/".$answer['id']."'>Verificar Cuenta</a>";
        // use wordwrap() if lines are longer than 70 characters
                    // $msg = wordwrap($msg,70);
        // send email
                    // mail($data['email'],"Jade Café, Verificar Cuenta",$msg);
 
        // event(new Registered($user));
        return $answer;
    }
}
