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


    <!-- Show the Products list as Tabular format -->
    <div class="d-flex justify-content-end mb-2">
        <!-- <div class="" style="padding: 15px 10px;">
            <button class="btn btn-success mt-2">Admin Dashboard</button>
        </div> -->

        <div class="" style="padding: 15px 10px;">
            <button class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#uploding_products">Uploading Product</button>
        </div>

        <div class="" style="padding: 15px 20px;">
            <a href="{{url('/logout')}}"><button class="btn btn-success mt-2">Logout</button></a>
        </div>
    </div>


    <div class="container mt-2">
        <!-- <button class="mb-5 btn btn-outline-success  text-center">
        </button> -->
        <table class="table mb-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Color</th>
                    <th scope="col">Size</th>
                    <th scope="col">Status</th>
                    <th scope="col">Product Status</th>
                    <th scope="col">Primary image</th>
                    <th scope="col">Secondary image</th>
                    <th scope="col">Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                <!-- The purpose of a product description is to supply customers with important information about the features and benefits of the product so they’re compelled to buy. However, entrepreneurs and marketers alike are susceptible to a common mistake that comes up when writing product descriptions. Even professional copywriters make it sometimes: writing product descriptions that simply describe your products. -->

                @foreach ($product_list as $products)

                <tr>
                    <th scope="row">1</th>
                    <td>{{$products->name}}</td>
                    <td>{{$products->price}}</td>
                    <td>{{$products->color}}</td>
                    <td>{{$products->size}}</td>
                    <td>{{$products->status}}</td>
                    <td>{{$products->product_status}}</td>
                    <td><img src="{{$products->primary_img}}" alt="" style="height: 150px;"></td>

                    @php
                    $sec_img_list= $products->secondary_img;
                    $secondary_images= json_decode($sec_img_list);
                    @endphp

                    <td>
                        <a href="{{url('/individual_products/'.$products->id)}}"> <button class="btn btn-success">Secondary Image List</button> </a>
                    </td>

                    <td>{{$products->description}}</td>

                    <td> <a href="{{url('/edit_product/'.$products->id)}}"><i class="fa-solid fa-pen-to-square ms-2"></i></a> </td>
                    <td> <a href="{{url('/delete_product/'.$products->id)}}"><i class="fa-solid fa-trash-can"></i></a> </td>
                </tr>

                @endforeach





            </tbody>
        </table>


    </div>




    <!-- start product-details Modal -->
    <div class="modal fade" id="uploding_products" tabindex="-1" aria-hidden="true">
        <div class="modal-xl modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
            <div class="modal-content p-3 p-md-5" style="border: 2px solid green; border-radius:30px;">
                <div class="modal-body">
                    <div class="d-flex justify-content-end">
                        <div class="">
                        </div>
                        <div class="">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>


                    <div class="container mt-5 row">

                        <form action="{{url('/post_upload_products')}}" method="POST" enctype="multipart/form-data">
                            @csrf

                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="mb-2" for="name">Product Name: </label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Enter Product Name: " required>
                            </div>
                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="mb-2" for="price">Product Price: </label>
                                <input type="text" class="form-control" id="price" name="price" placeholder="Enter Product Price: " required>
                            </div>
                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="mb-2" for="size">Product Size: </label>
                                <input type="text" class="form-control" id="size" name="size" placeholder="Enter Product Size: " required>
                            </div>
                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="mb-2" for="color">Product Color:</label>
                                <input type="text" class="form-control" id="color" name="color" placeholder="Enter Product Size: " required>
                            </div>
                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="mb-2" for="status">Status:</label>
                                <input type="text" class="form-control" id="status" name="status" placeholder="Enter Status: " required>
                            </div>
                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="mb-2" for="product_status">Product Status:</label>
                                <input type="text" class="form-control" id="product_status" name="product_status" placeholder="Enter Product Status: " required>
                            </div>

                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="form-label">Select Product Status</label>
                                <select name='product_status' class="form-select">
                                    <option value="design">Design</option>
                                    <option value="ready">Ready</option>
                                </select>
                            </div>

                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="mb-2" for="primary_image">primary Product Image</label>
                                <input type="file" class="form-control-file" id="primary_image" name="primary_image" placeholder="Enter primary Product Image: " required>
                            </div>


                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="mb-2" for="secondary_image">Secondary Product Image</label>
                                <input type="file" class="form-control-file" id="secondary_image" name="secondary_image[]" placeholder="Enter SEcondary Product Image: " required>

                            </div>
                            <section class="secondary_images_parent">

                            </section>

                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5 plus_btn btn btn-success">Add New Secondary Image <i class="fa-solid fa-plus" style="font-size: 17px;"></i></div>

                            <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
                                <label class="mb-2" for="description">Description </label>
                                <textarea class="form-control" id="description" name="description" rows="4" placeholder="Enter Product Description: " required></textarea>
                            </div>

                            <button type="submit" class="btn btn-success btn-lg submit">Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- end each product-details Modal -->


    <!-- Link of JS files -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{asset('/assets_topmost/js/custom.js')}}"></script>
    <script src="{{asset('/assets_topmost/js/custom1.js')}}"></script>


</body>

</html>