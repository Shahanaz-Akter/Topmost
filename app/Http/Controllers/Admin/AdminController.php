<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{





    public function login()
    {
        return view('AdminView.admin_form');
    }
    public function post_admin_form(Request $re)
    {
        // return dd($re);

        $email = $re->email;
        $pass = $re->password;

        $user = \App\User::where(['email' => $email, 'password' => $pass])->first();  //will match all of the records and   send first record 
        // dd($user);

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

        // dd($re->image);
        if ($request->image != null) {

            //for getting original image name used file()
            $imageName = $request->file('image')->getClientOriginalName();
            // dd($imageName);

            //To move image into public folder
            $request->image->move(public_path('/images'), $imageName);
            $img_url = '/images' . $imageName;

            \App\img_upload::create([
                'product_name' => $request->name,
                'price' => $request->price,
                'product_description' => $request->description,
                'image' => $img_url,

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
