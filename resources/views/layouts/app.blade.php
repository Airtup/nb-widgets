<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    <title>Nation Builder</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'ArchitectUI - Vuejs & Bootstrap 4 & Vuetify Admin UI Dashboard Template') }}</title>

    <link href=css/app.css rel=stylesheet>
</head>

<body>
    <div id="app">
    </div>

    <script src=js/main.js> </script> 
    <script type="text/javascript">
        var BASE_URL = "{{URL::to('/')}}";
    </script>
</body>

</html>