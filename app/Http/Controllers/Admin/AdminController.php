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

        $product_list = \App\products::all();
        // dd($product_list);
        return view('AdminView.dashboard')->with(['product_list' => $product_list]);
    }



    public function post_dashboard()
    {

        return view('AdminView.post_dashboard');
    }



    public function post_upload_products(Request $request)
    {

        // dd($request);
        // $secondary_image_array = $request->secondary_image;
        // dd($secondary_image_array);


        if ($request->primary_image != null) {

            //for getting original image name used file()
            $imageName = $request->file('primary_image')->getClientOriginalName(); //getting original image name
            // dd($imageName);
            //To move image into public folders folder
            $request->primary_image->move(public_path('/assets_topmost/topmost_img'), $imageName);
            $img_url = '/assets_topmost/topmost_img/' . $imageName;
            // dd($img_url);

            $secondaryImages = $request->file('secondary_image');
            $url_array = [];
            if ($secondaryImages) {
                foreach ($secondaryImages as $secondaryImage) {
                    $Se_img1 = $secondaryImage->getClientOriginalName();
                    $secondaryImage->move(public_path('/assets_topmost/topmost_img'), $Se_img1);
                    $img_url1 = '/assets_topmost/topmost_img/' . $Se_img1;
                    // echo ($img_url1);
                    // Push a value into the array
                    array_push($url_array, $img_url1);
                }
            }
            // dd($url_array);


            // $Data1 = implode($secondary_all_img_url); 
            //convert the array to string 
            $jsonData = json_encode($url_array);
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


    public function individual_products($product_id)
    {

        return view('AdminView.individual_products')->with(['product_id' => $product_id]);
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

    public function edit_product($id)
    {
        $products = \App\products::where('id', $id)->first();
        // dd($products);
        return view('AdminView.edit_product')->with(['products' => $products]);
    }

    public function post_edit_products(Request $request)
    {
        \App\products::where('id', $request->id)->update([
            'name' => $request->title,
            'size' => $request->size,
            'price' => $request->rate,
            'color' => $request->color,
            'status' => $request->status,
            'description' => $request->description,
        ]);

        return redirect()->back();
    }
    public function delete_product($id)
    {
        \App\products::where('id', $id)->delete();
        return redirect()->back();
    }
}
