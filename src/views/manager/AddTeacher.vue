<template>
    <div>
        <div class="container pt-5">
            <div class="row">
                <div class="col-8 offset-2">
                    <h2 class="display-6 text-center mb-4">Add a new Teacher</h2>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput0">First Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput0" placeholder="First Name">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Last Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput2">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput3">Email password</label>
                            <input type="password" class="form-control" id="exampleFormControlInput3" placeholder="...">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Select subject</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>English</option>
                            <option>Math</option>
                            <option>Python</option>
                            <option>Python</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'studentadd',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        background-color: #006094;
        color: white;

        &:hover {
            background-color: #0085B2;
        }
        
    }
</style>