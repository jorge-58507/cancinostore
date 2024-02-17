<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="keywords" content="@yield('meta_keywords','tacos, comida mexicana')">
        <meta name="description" content="@yield('meta_description','Pagina para comprar comida mexicana')">
        <link rel="canonical" href="{{url()->current()}}"/>

        <title>@yield('title') Tequila & Mezcal</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="{{ asset('attached/css/mp.css') }}">
        <link rel="stylesheet" href="{{ asset('attached/css/store.css') }}">
        @yield('css')

        <!-- Scripts -->
    </head>
    <body class="">
        <main>
            <div class="container-xxl">
                <div class="row">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top border-bottom border-success">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img src="/attached/image/logo_tm.png" alt="" width="40px" height="40px">
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="{{ url('/request/new') }}"><strong>PEDIDOS</strong></a>
                                    </li>
                                @if (Route::has('login'))
                                    @auth
                                        @if (auth()->user()->checkRole('admin') === true )
                                            <li class="nav-item">
                                                <a class="nav-link" aria-current="page" href="{{ url('/configuration') }}"><strong>CONFIGURACI&Oacute;N</strong></a>
                                            </li>
                                        @endif
                                    @else
                                        <li class="nav-item px-2">
                                            <a class="btn tmgreen_bg" href="{{ url('login') }}">Ingresar</a>
                                        </li>

                                        @if (Route::has('register'))
                                            <li class="nav-item px-2">
                                                <a class="btn" href="{{ route('register') }}">Registrarse</a>
                                            </li>
                                        @endif
                                    @endauth
                                @endif
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <form method="POST" id="form_logout" action="{{ route('logout') }}" style="display: none">  @csrf   <button type="submit" id="btn_logout" class="">{{ __('Log Out') }}</button></form>

                    <div class="col-md-12">
                        @yield('content')
                        <div id="toast_container" class="toast-container position-fixed bottom-0 end-0 p-3"></div>
                    </div>
                    <footer class="bd-footer mt-3 bg-body-tertiary">
                        <div class="container py-2 px-4 px-md-3 text-body-secondary">
                            <div class="row">
                                <div class="col-9 col-lg-9 mb-3">
                                    <h5>Tequila & Mezcal</h5>
                                    <ul class="list-unstyled">
                                        @if (Route::has('login'))
                                            @auth
                                                <li class="mb-2"><a class="text-decoration-none" href="{{ url('/request/new') }}">Pedidos</a></li>
                                                <li class="mb-2"><a class="text-decoration-none cursor_pointer" onclick="document.getElementById('form_logout').submit()">Salir</a></li>
                                            @else
                                                <li class="mb-2"><a class="text-decoration-none" href="{{ url('/request/new') }}">Pedidos</a></li>
                                                <li class="mb-2"><a class="text-decoration-none" href="{{ url('login') }}">Ingresar</a></li>
                                                @if (Route::has('register'))
                                                    <li class="mb-2"><a class="text-decoration-none" href="{{ route('register') }}">Registrarse</a></li>
                                                @endif
                                            @endauth
                                        @endif
                                    </ul>
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                                        <img src="/attached/image/logo_tm.png" alt="" width="90px" height="90px">
                                        <span class="fs-5">Tequila & Mezcal</span>
                                    </a>
                                    <ul class="list-unstyled small">
                                    <li class="mb-2">Designed and built by Jorge Salda&ntilde;a</li>
                                    <li class="mb-2">&copy; 2023 - {{ date('Y') }} </li>
                                    </ul>
                                    <button id="btn_shopcart" type="button" class="btn btn-outline-danger btn-lg btn_rounded_90 btn_floating display_none text-truncate">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16" width="30" height="30">
                                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"></path>
                                        </svg>
                                        <br>Pedido
                                    </button>

                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>        
        {{-- JQUERY  --}}
        <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
        {{-- JQUERY-UI --}}
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY=" crossorigin="anonymous"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/jquery-ui.min.css" rel="stylesheet">
        
        
        <script src="{{ asset('attached/js/validCampoFranz.js') }}"></script>
        <script src="{{ asset('attached/js/mp.js') }}"></script>

        <script type="text/javascript">
            document.getElementById('btn_shopcart').addEventListener('click', () => {  cls_command.open_shopcart();  });
            const cls_general = new general_funct();
        </script>

        @yield('javascript')
    </body>
</html>
