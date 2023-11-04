<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\loginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use App\User;
use App\role_user;

class AuthController extends Controller
{
    public function register (Request $request){
        $validatedData = $request->validate([
            'name'      => 'required|max:150',
            'email'     => 'required|email|max:150|unique:users',
            'password'  => 'required|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $model_role_user = new role_user;
        $model_role_user->user_id = $user['id'];
        $model_role_user->role_id = 2;
        $model_role_user->save();

        $token = JWTAuth::fromUser($user);

        // ENVIO DEL E-MAIL -------ARREGLAR LA DIRECCION URL
        // the message
                    // $msg = "Usted esta recibiendo este correo ya que decidió registrarse en la tienda de Jade Café, para verificar la cuenta haga click en el siguiente enlace <a href='direccionurl.com/verified/".$answer['id']."'>Verificar Enlace</a>";
        // use wordwrap() if lines are longer than 70 characters
                    // $msg = wordwrap($msg,70);
        // send email
                    // mail($data['email'],"Verificar Cuenta",$msg);


        return response()->json([
            'user' => $user,
            'token' => $token
        ],201);
    }

    public function login(loginRequest $request){
        $credential = $request->only('email','password');

        try {
            if (!$token = JWTAuth::attempt($credential)) {
                return response()->json([
                    'status' => 'failed',
                    'message' => 'Credenciales invalidas'
                ],400);
            }
        } catch (JWTException $e) {
            return response()->json([
                'status' => 'failed',
                'message' => 'No Token'
            ],500);
        }
        $data = ['token' => $token, 'status' => 'success'];
        return response()->json(compact('data'), 200);
    }

    protected function user() {
        return JWTAuth::parseToken()->authenticate();
    }
}
