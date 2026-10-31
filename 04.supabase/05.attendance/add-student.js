const studentName = document.querySelector("#student-name");
const imageInput = document.querySelector("#student-image");

const supabaseClient = supabase.createClient(
  "https://ckphhodqbcyzfhkzitos.supabase.co",
  "sb_publishable_8yeu_vbqPsOOx6rRVH8LMQ_CgXxNddr",
);

async function addStudent(event) {
  event.preventDefault();

  const image = imageInput.files[0];


  // Step 1: Upload image to storge bucket
  const bucketResponse = await supabaseClient.storage
    .from("student-images")
    .upload(`profile-images/img-${Date.now()}-${image.name}`, image);

	// Step 2: (image upload hone ky baad image ka Link nikalna)
  const publicData = await supabaseClient.storage
    .from("student-images")
    .getPublicUrl(bucketResponse.data.path);

	// Step 3: wo link image wala name ky sath database ma save hoga
  const { error } = await supabaseClient.from("students").insert({
    student_name: studentName.value,
    image_path: publicData.data.publicUrl,
  });

  console.log(error);
}
