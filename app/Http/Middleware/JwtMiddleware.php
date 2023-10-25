<?php

namespace App\Http\Middleware;

use Closure;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

use PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException as JWTException;
use PHPOpenSourceSaver\JWTAuth\Exceptions\TokenExpiredException as TokenExpiredException;
use PHPOpenSourceSaver\JWTAuth\Exceptions\TokenInvalidException as TokenInvalidException;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            JWTAuth::parseToken()->authenticate();
        } catch (\PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException $e) {
            if ($e instanceof TokenInvalidException  ) {
                return response()->json(['status' => 'failed', 'message' => 'Token Invalido'],401);
            }

            if ($e instanceof TokenExpiredException ) {
                return response()->json(['status' => 'failed', 'message' => 'Token Vencido'],401);
            }

            return response()->json(['status' => 'failed', 'message' => 'Token no encontrado'],401);
        }
        return $next($request);
    }
}
