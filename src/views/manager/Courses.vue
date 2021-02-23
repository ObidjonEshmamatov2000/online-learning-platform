<template>
    <div>
        <div class="container pt-5">
            <div class="row">
                <div class="col-6 offset-3">
                    <h2 class="display-6 text-center mb-4">Create a new Course</h2>
                    <form>
                        <div class="form-group">
                            <label for="selectGroup">Select group</label>
                            <select class="form-control" id="selectGroup">
                            <option>714-19-group</option>
                            <option>715-19-group</option>
                            <option>717-19-group</option>
                            <option>716-19-group</option>
                            <option>719-19-group</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="selectTeacher">Select Teacher</label>
                            <select id="selectTeacher" class="form-control">
                                <option>Malika Nizomova</option>
                                <option>Malika Nizomova</option>
                                <option>Malika Nizomova</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" class="form-control" disabled v-model="subject"/>
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
    name: 'Courses',
    data() {
        return {
            subject: 'Pthon'
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