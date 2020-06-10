<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/default.min.css">
    <title>NB Widgets</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/highlight.min.js"></script>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'NB Widgets') }}</title>

    <link href="{{ mix('css/app.css') }}" rel=stylesheet>
    <script src="https://browser.sentry-cdn.com/5.17.0/bundle.min.js" integrity="sha384-lowBFC6YTkvMIWPORr7+TERnCkZdo5ab00oH5NkFLeQUAmBTLGwJpFjF6djuxJ/5" crossorigin="anonymous"></script>

    <!-- If you include the integration it will be available under Sentry.Integrations.Vue -->
    <script src="https://browser.sentry-cdn.com/5.17.0/vue.min.js" crossorigin="anonymous"></script>

    <script>
      Sentry.init({
        dsn: 'https://c879329a48764d1484fdb458015f0715@o404846.ingest.sentry.io/5271087',
        integrations: [new Sentry.Integrations.Vue({Vue, attachProps: true})],
      });
    </script>
</head>

<body>
    <div id="app">
    </div>
    <script src="{{ mix('js/main.js') }}"> </script>
    <script type="text/javascript">
        var BASE_URL = "{{URL::to('/')}}";
    </script>
    <script>
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });
</script>
</body>

</html>
