
// container
// <div class="col-12 col-md-8 col-lg-8  col-xl-8 form-group text-uppercase mb-5">
//     <label class="mb-2" for="secondary_image">Secondary Product Image</label>
//     <input type="file" class="form-control-file" id="secondary_image" name="secondary_image" placeholder="Enter SEcondary Product Image: " required>

// </div>
// let div = document.querySelector('.putput');

let container = document.querySelector('.container');
let parent = document.querySelector('.secondary_images_parent');
let plus = document.querySelector('.plus_btn');
plus.addEventListener('click', function (event) {
    // console.log(event.target);
    let div = document.createElement('div');
    div.setAttribute("class", "col-12 col-md-8 col-ld-8 col-xl-8 form-group text-uppercase mb-5");

    let label = document.createElement('label');
    label.setAttribute("for", "secondary_image");
    label.setAttribute("class", "mb-2");
    label.textContent = "Secondary Product Image  ";

    let input = document.createElement('input');
    input.setAttribute("type", "file");
    input.setAttribute("class", "form-control-file");
    input.setAttribute("id", "secondary_image");
    input.setAttribute("name", "secondary_image[]");
    input.setAttribute("placeholder", "Enter SEcondary Product Image: ");
    input.setAttribute("required", "");

    div.append(label);
    div.append(input);

    parent.append(div);
    console.log(parent);
});