<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- bootstrap update version link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">

    <!-- fontawewsome update version link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>

    <div class="container mt-5">

        <div class="row container">
            <form action="{{url('/post_edit_products')}}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5 d-none">
                    <label class="mb-2" for="id">Product ID: </label>
                    <input type="text" class="form-control" id="id" name="id" value="{{$products->id}}">
                </div>
                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5">
                    <label class="mb-2" for="title">Product Name: </label>
                    <input type="text" class="form-control" id="title" name="title" value="{{$products->name}}">
                </div>
                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5">
                    <label class="mb-2" for="rate">Product Price: </label>
                    <input type="text" class="form-control" id="rate" name="rate" value="{{$products->price}}">
                </div>
                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5">
                    <label class="mb-2" for="size">Product Size: </label>
                    <input type="text" class="form-control" id="size" name="size" value="{{$products->size}} ">
                </div>
                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5">
                    <label class="mb-2" for="color">Product Color:</label>
                    <input type="text" class="form-control" id="color" name="color" value="{{$products->color}} ">
                </div>
                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5">
                    <label class="mb-2" for="status">Status:</label>
                    <input type="text" class="form-control" id="status" name="status" value="{{$products->status}} ">
                </div>



                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5">
                    <label class="form-label">Product Status</label>
                    <select name='product_status' class="form-select">
                        <option value="design">Design</option>
                        <option value="ready">Ready</option>
                    </select>
                </div>

                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5">
                    <label class="mb-2" for="primary_image">primary Product Image</label>
                    <input type="file" class="form-control-file" id="primary_image" name="primary_image" placeholder="Enter primary Product Image: ">
                </div>


                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5">
                    <label class="mb-2" for="secondary_image">Secondary Product Image</label>
                    <input type="file" class="form-control-file" id="secondary_image" name="secondary_image[]" placeholder="Enter SEcondary Product Image: ">

                </div>

                <section class="secondary_images_parent">
                </section>

                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5 plus_btn btn btn-success">Add New Secondary Image <i class="fa-solid fa-plus" style="font-size: 17px;"></i></div>

                <div class="col-12 col-md-10 col-lg-10 col-xl-10 form-group text-uppercase mb-5">
                    <label class="mb-2" for="description">Description </label>
                    <textarea class="form-control" id="description" name="description" rows="4" value="{{$products->description}} "></textarea>
                </div>

                <button type="submit" class="btn btn-success btn-lg submit">Submit</button>
            </form>

        </div>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{asset('/assets_topmost/js/custom1.js')}}"></script>
</body>

</html>