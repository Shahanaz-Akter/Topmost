<?php

namespace App\Http\Controllers\Admin;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;

class AdminController extends Controller
{

    public function login()
    {
        return view('AdminView.admin_form');
    }

    public function logout()
    {
        return redirect('/index');
    }


    public function post_admin_form(Request $re)
    {
        // return dd($re);

        $em = $re->email;
        $pass = $re->password;

        // $user_table_record = User::all(); fetches all of the records from the user table
        // $user = User::where('email', $em)->where('password', $pass);
        $user = User::where(['email' => $em, 'password' => $pass])->first();  //will match all of the records and   send first matching record 

        if ($user) {
            return redirect('/dashboard');
        } else {
            return redirect()->back();
        }
    }

    public function dashboard()
    {

        return view('AdminView.dashboard');
    }

    public function post_dashboard()
    {

        return view('AdminView.post_dashboard');
    }



    public function post_upload_products(Request $request)
    {

        // dd($request);

        if ($request->primary_image != null) {

            //for getting original image name used file()
            $imageName = $request->file('primary_image')->getClientOriginalName(); //getting original image name
            // dd($imageName);

            //To move image into public folders folder
            $request->primary_image->move(public_path('/assets_topmost/topmost_img'), $imageName);

            $img_url = '/assets_topmost/topmost_img/' . $imageName;

            // dd($img_url);


            $Se_img1 = $request->file('secondary_image1')->getClientOriginalName(); //getting original image name
            $request->secondary_image1->move(public_path('/assets_topmost/topmost_img'), $Se_img1);
            $img_url1 = '/assets_topmost/topmost_img/' . $Se_img1;
            // dd($img_url1);

            $Se_img2 = $request->file('secondary_image2')->getClientOriginalName(); //getting original image name
            $request->secondary_image2->move(public_path('/assets_topmost/topmost_img'), $Se_img2);
            $img_url2 = '/assets_topmost/topmost_img/' . $Se_img2;

            $Se_img3 = $request->file('secondary_image3')->getClientOriginalName(); //getting original image name
            $request->secondary_image3->move(public_path('/assets_topmost/topmost_img'), $Se_img3);
            $img_url3 = '/assets_topmost/topmost_img/' . $Se_img3;


            //secondary image array
            $secondary_all_img_url = [$img_url1, $img_url2, $img_url3];

            // $Data1 = implode($secondary_all_img_url); 
            //convert the array to string 
            $jsonData = json_encode($secondary_all_img_url);
            echo  $jsonData;

            \App\Products::create([
                'name' => $request->name,
                'price' => $request->price,
                'size' => $request->size,
                'color' => $request->color,
                'status' => $request->status,
                'product_status' => $request->product_status,
                'primary_img' => $img_url,
                'secondary_img' => $jsonData,
                'description' => $request->description,
            ]);
        }

        return redirect('/dashboard');
    }















    public function index()
    {
        return view('UserView.index');
    }


    public function why_us()
    {
        return view('UserView.why_us');
    }

    public function design_studio()
    {
        return view('UserView.design_studio');
    }
}
