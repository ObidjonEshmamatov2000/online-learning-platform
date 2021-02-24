<template>
    <div id="student-groups">
      <div class="container mt-4">
        <div class="row">
          <div class="col bg-darker">
            <h2 class="text-center mb-4">715-19-group</h2>
            <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Adress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>mark@otto.com</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>jacob@thor.com</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Mitchen</td>
                <td>larry@mitchen.com</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>mark@otto.com</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>jacob@thor.com</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Mitchen</td>
                <td>larry@mitchen.com</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'studentGroupes'
}
</script>

<style scoped>
    #student-groups {
        
    }

    .bg-darker {
      background-color: rgba(0, 0, 0, .03);
      padding: 20px;
    }
    
</style>