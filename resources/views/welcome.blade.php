<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Tequila & Mezcal</title>
        <link rel="icon" type="image/x-icon" href="{{ asset('attached/image/favicon_tm.ico') }}" />
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



    
<body>

        <!-- Preloader-->
        <div class="page-loader" style="display: none;">
            <div class="page-loader-inner">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        </div>
        <!-- Preloader end-->

        <!-- Header-->
        <header class="header">
            <div class="container-fluid">
                <!-- Brand-->
                <div class="inner-header"><a class="inner-brand" href="{{ asset('/') }}"><img src="/attached/image/logo_tm.png" height="100px"></a></div>
            </div>
        </header>
        <!-- Header end-->

        <!-- Wrapper-->
        <div class="wrapper">
            <!-- Hero-->
            <section class="top-section">
            </section>
            <!-- Hero end-->

            <!-- About-->
            <section class="middle-section">
                <div class="module">
                    <div class="row">
                        <div class="col-md-6 m-auto text-center">
                            <h1 class="companyname text-white">Tequila y Mezcal</h1>
                            <p class="lead pt-3">Si caes, que sea en la tentaci&oacute;n de unos ricos tacos.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="space text-center" data-my="60px" style="margin-top: 60px;">
                                <a href="/request/new" class="btn btn-lg btn-success">Ordenar en Linea</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- About end-->

            <!-- Footer-->
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <!-- Text widget-->
                            <aside class="widget widget-text">
                                <div class="widget-title">
                                    <h6>Nosotros</h6>
                                </div>
                                <div class="textwidget">
                                    <p>Somos un retaurante de comida mexicana, nos esforzamos en ofrecer un excelente servicio a nuestra clientela.</p>
                                    <ul class="social-icons">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14px"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path style="fill:#fff;" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div class="col-md-3">
                            <!-- Twitter widget-->
                            <aside class="widget twitter-feed-widget">
                                <div class="widget-title">
                                    <h6>Contacto</h6>
                                </div>
                                <div class="textwidget">
                                    <p>
                                        Ubicaci&oacute;n: Boulevard Penonom&eacute;, Feria local #46<br>
                                        E-mail: tequilaymezcalcansino@gmail.com<br>
                                        Phone: 6611-8028<br>
                                    </p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
                <div class="footer-bar text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright">
                                    <p>© 2024 - {{ date('Y') }} Tequila & Mezcal, All Rights Reserved. Design por Jorge Salda&ntilde;a</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- Footer end-->
        </div>
        <!-- Wrapper end-->


        <!-- Scripts-->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0rANX07hh6ASNKdBr4mZH0KZSqbHYc3Q"></script>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    
    </body>
</html>


