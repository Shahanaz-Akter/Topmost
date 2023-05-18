<!DOCTYPE html>
<html>

<head>
    <title>Product Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <!-- uploading form bootstrap -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->

</head>

<body>


    <!-- Show the Products list as Tabular format -->
    <div class="d-flex justify-content-center align-items-center">
        <div class="" style="padding: 15px 10px;">
            <button class="btn btn-outline-success mt-2" data-bs-toggle="modal" data-bs-target="#uploding_products">Uploading Product</button>
        </div>
    </div>


    <div class="container mt-2">

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>

                @php

                @endphp


                <tr>
                    <!-- <th scope="row">1</th> -->
                    <td><img src="assets_topmost/images/all_img/ladies_full_sleeve_topbottom_set/full_sleeve1.png" alt="Product 1" style="height:100%!important;width: 100%!important;">
                    </td>
                    <td>Tshirt</td>
                    <td>$120</td>
                    <td>The purpose of a product description is to supply customers with
                        important information
                        about the features and benefits of the product so they’re compelled
                        to buy. However,
                        entrepreneurs and marketers alike are susceptible to a common
                        mistake that comes up when
                        writing product descriptions. Even professional copywriters make it
                        sometimes: writing
                        product descriptions that simply describe your products.</td>
                </tr>



            </tbody>
        </table>


    </div>


    <!-- start product-details1 Modal -->
    <div class="modal fade" id="uploding_products" tabindex="-1" aria-hidden="true">
        <div class="modal-lg modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
            <div class="modal-content p-3 p-md-5">
                <div class="modal-body">
                    <div class="d-flex justify-content-end">
                        <div class="">
                        </div>
                        <div class="">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>


                    <div class="container mt-5">

                        <form action="{{url('/post_upload_products')}}" method="POST" enctype="multipart/form-data">
                            @csrf

                            <div class="form-group text-uppercase mb-5">
                                <label class="mb-2" for="name">Name </label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Enter Product Name: " required>
                            </div>
                            <div class="form-group text-uppercase mb-5">
                                <label class="mb-2" for="image">Image </label>
                                <input type="file" class="form-control-file" id="image" name="image" placeholder="Enter Product Image: " required>
                            </div>
                            <div class="form-group text-uppercase mb-5">
                                <label class="mb-2" for="price">Price </label>
                                <input type="text" class="form-control" id="price" name="price" placeholder="Enter Product price: " required>
                            </div>
                            <div class="form-group text-uppercase mb-5">
                                <label class="mb-2" for="description">Description </label>
                                <textarea class="form-control" id="description" name="description" rows="4" placeholder="Enter Product Description: " required></textarea>
                            </div>

                            <button type="submit" class="btn btn-success submit">Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- end each product-details1 Modal -->


    <!-- Link of JS files -->


    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>

</html>