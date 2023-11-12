<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Jade Caf&eacute;</title>
        <link rel="icon" type="image/x-icon" href="{{ asset('attached/image/favicon.ico') }}" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap" rel="stylesheet" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="{{ asset('attached/css/sc.css') }}" rel="stylesheet" />
        <link href="{{ asset('attached/css/mp.css') }}" rel="stylesheet" />
    </head>
    <body style="background-image: url('attached/image/jade_bg.jpg')">
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="z-index: 100">
            <div class="container-fluid text-center d-flex justify-content-center pb-2">
                <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>&nbsp;Menu
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        @if (Route::has('login'))
                            @auth
                                <a class="nav-link active btn btn-outline-light" href="{{ url('/request') }}">Pedidos</a>
                            @else
                                <a class="nav-link text-white" href="{{ url('/login') }}">Ingresar</a>
                                @if (Route::has('register'))
                                    <a class="nav-link text-white" href="{{ route('register') }}">Registrarse</a>
                                @endif
                            @endauth
                        @endif
                    </div>
                </div>
                <div class="d-none d-md-block px-1">
                    <form method="POST" action="/login" class="d-flex h_50">
                            {{-- @csrf --}}
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        
                        <label for="email" class="text-white">{{ __('Correo Electrónico') }}</label>&nbsp;
                        <input id="email" type="email" class="form-control me-2 @error('email') is-invalid @enderror" name="email" value="{{ old('Usuario') }}" required autocomplete="email" autofocus>
                        @error('email')
                            <span class="invalid-feedback text-red text-darken-2" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        <label for="password" class="text-white">{{ __('Contraseña') }}</label>&nbsp;
                        <input id="password" type="password" class="form-control me-2 @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                        @error('password')
                            <span class="invalid-feedback red-text text-darken-2" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
        
                        <button class="btn btn-outline-light" type="submit" name="action">Entrar</button>
                        <a class="btn btn-link text-white" href="{{ route('password.request') }}">
                            {{ __('¿Contraseña Olvidada?') }}
                        </a>
                    </form>
                </div>
            </div>
        </nav>


        <!-- Masthead-->
        <div class="masthead">
            <div class="masthead-content">
                <div class="container-fluid px-4 px-lg-0">
                    <img src="{{ asset('attached/image/logo.png') }}" alt="" width="300px">
                    <h1 class="fst-italic lh-1 mb-4">Jade Caf&eacute;</h1>
                    <p class="fs-6">Estamos en Boulevard Penonomé, Feria Local 50</p>
                    <h4>Jade Café Coffee Shop </h4>
                    <p class="fs-6">Descubre el encanto del caf&eacute; en Penonom&eacute; con nuestra cafeter&iacute;a &uacute;nica. Sum&eacute;rgete en aromas irresistibles y sabores excepcionales  mientras disfrutas de un ambiente acogedor. ¡Visitanos para una experiencia &uacute;nica de caf&eacute; en el coraz&oacute;n de Penonom&eacute;!</p>
                </div>
            </div>
        </div>
        <div class="content">
        </div>
        <!-- Social Icons-->
        <!-- For more icon options, visit https://fontawesome.com/icons?d=gallery&p=2&s=brands-->
        <div class="social-icons">
            <div class="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                <a class="btn btn-dark m-3" target="_blank" href="https://www.tiktok.com/@jade.coffe.shop"><i class="fab fa-tiktok"></i></a>
                <a class="btn btn-dark m-3" target="_blank" href="https://www.facebook.com/jadecoffeeshop"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark m-3" target="_blank" href="https://www.instagram.com/jadecafe_coffeeshop/"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
</html>


