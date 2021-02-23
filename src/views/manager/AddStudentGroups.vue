<template>
    <div>
        <div class="container pt-5">
            <div class="row">
                <div class="col-8 offset-2">
                    <h2 class="display-6 text-center mb-4">Create a new Group</h2>
                    <form>
                        <div class="form-group">
                            <label for="groupName">Group Name</label>
                            <input type="text" class="form-control" id="groupName" placeholder="Name of group">
                        </div>
                        <div class="form-group">
                            <label for="groupStudents">Select Students</label>
                            <select multiple class="form-control" id="groupStudents">
                            <option>Alisherov Donyor</option>
                            <option>Jahongirov Nodir</option>
                            <option>Jahongirov Nodir</option>
                            <option>Jahongirov Nodir</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-block">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Groups'
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