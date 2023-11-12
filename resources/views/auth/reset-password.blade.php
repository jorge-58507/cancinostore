@extends('layouts.app')
@section('title','Cambiar Contraseña')
@section('meta_keywords','reset password, new password')
@section('meta_description','Send link for reset password of jadecoffeeshop.com')

@section('content')
<div class="container pt-5 vh_60">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header csjade_bg text-white">{{ __('Contraseña Olvidada') }}</div>

                <div class="card-body">
                    <form method="POST" action="/reset-password">
                        @csrf
                        @if (session('status'))
                            <div class="mb-4 font-medium text-sm text-green-600">
                              Le hemos enviado a su correo un enlace para cambiar la contrase&ntilde;a.
                            </div>
                        @endif
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Correo Electrónico') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus value="{{ $request->email }}">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Contraseña') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password_confirmation" class="col-md-4 col-form-label text-md-right">{{ __('Confirmar Contraseña') }}</label>

                            <div class="col-md-6">
                                <input id="password_confirmation" type="password" class="form-control @error('password') is-invalid @enderror" name="password_confirmation" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <input id="token" type="text" class="form-control" name="token" value="{{ $request->token }}">
                        <div class="form-group row mb-0 pt-3">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Enviar E-mail') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
