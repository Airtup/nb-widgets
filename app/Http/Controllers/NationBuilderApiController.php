<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nation;
use App\Models\NationDetails;
use App\Models\Log;

class NationBuilderApiController extends Controller
{
    /**
     * Generate Token to a NationBuilderp
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function generate_token(Request $request)
    {
        $params = array(
            'code' => $request->nation["access_token"],
            'redirect_uri' => 'https://stage.nbwidgets.com/nbcallback',
            'client_id' => $request->client["id"],
            'client_secret' => $request->client["secret"],
            'grant_type' => 'authorization_code'
        );
        
        $url = 'https://' .  $request->nation["slug"]. '.nationbuilder.com/oauth/token';
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type:application/json',"Accept: application/json"));
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => $url,
            CURLOPT_USERAGENT => 'From Front End',
            CURLOPT_POST => 1,
            CURLOPT_POSTFIELDS => json_encode($params)
        ));
        // Send the request & save response to $resp
        $resp = curl_exec($curl);
        curl_close($curl);

        $response = json_decode($resp);
        dd($response);
        return response()->json(['status' => 'ok', 'data' => $response->access_token], 200);
    }
}
