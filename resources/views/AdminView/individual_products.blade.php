<!DOCTYPE html>
<html>

<head>
    <title>Product Form</title>

    <!-- bootstrap update version link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">

    <!-- fontawewsome update version link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>

    @php
    $products = \App\Products::where('id',$product_id)->first();
    $sec_products= $products->secondary_img;
    $sec_all_array_products= json_decode($sec_products);
    @endphp

    <div class="text-center mt-5"><button class="btn btn-lg  btn-success text-center">Secondary Products List</button></div>
    <div class="container mt-2 border border-2">

        <div class="row justify-content-center mt-5 mb-5">

            @foreach($sec_all_array_products as $sec_all_array_product)

            <div class="col-lg-4 col-md-3 col-sm-6 col-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img class="" src="{{$sec_all_array_product}}" alt="image" style="height: 100%; width: 100%;">
                    </div>
                    <div class="">
                        <h4 class="mb-2 text-center mt-2 fw-bold">{{$products->name}}</h4>
                        <div class="d-flex justify-content-center align-items-center border">
                            <div class="text-justify" style="padding: 15px 10px;">
                                <div>Price: {{$products->price}}</div>
                                <div>Size: {{$products->size}}</div>
                                <div>Color: {{$products->color}}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            @endforeach()

        </div>






    </div>

    </div>




    <!-- Link of JS files -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{asset('/assets_topmost/js/custom.js')}}"></script>


</body>

</html>