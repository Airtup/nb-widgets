<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/default.min.css">
    <title>Nation Builder</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/default.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/highlight.min.js"></script>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'ArchitectUI - Vuejs & Bootstrap 4 & Vuetify Admin UI Dashboard Template') }}</title>

    <link href=css/app.css rel=stylesheet>
</head>

<body>
    <div id="app">
    </div>
    <script src=js/main.js> </script> <script type="text/javascript">
        var BASE_URL = "{{URL::to('/')}}";
    </script>
    <script>hljs.initHighlightingOnLoad();</script>
</body>

</html>