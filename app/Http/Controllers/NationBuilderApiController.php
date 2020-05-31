<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NationBuilderApiController extends Controller
{
    /**
     * Generate Token to a NationBuilder
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function generate_token(Request $request)
    {

        $nation_slug = $_POST['nation_slug'];
        $client_id = $_POST['client_id'];
        $client_secret = $_POST['client_secret'];
        $code = $_POST['code'];
        $redirect_uri = $_POST['redirect_uri'];

        $params = array(
            'code' => $code,
            'redirect_uri' => $redirect_uri,
            'client_id' => $client_id,
            'client_secret' => $client_secret,
            'grant_type' => 'authorization_code'
        );
        
        $url = 'https://' . $nation_slug . '.nationbuilder.com/oauth/token?' . http_build_query($params);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => $url,
            CURLOPT_USERAGENT => 'From Front End',
            CURLOPT_POST => 1,
            CURLOPT_POSTFIELDS => json_encode($params)
        ));
        // Send the request & save response to $resp
        $resp = curl_exec($curl);
        echo $resp;
        curl_close($curl);
        dd($request);

        return response()->json(['status' => 'ok', 'data' => null], 200);
    }
}
