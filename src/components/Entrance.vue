<template>
    <div>
        <div class="row">
            <div class="entrance">
                <div class="entrance-div">
                    <h2 class="entrance-header mb-2">Distance Learning</h2>
                    <h2 class="entrance-header mb-4">Educational Center</h2>
                    <p class="entrance-message">Our online courses are built in partnership with technology leaders and are designed to meet industry demands.</p>
                </div>
            </div>
            <div class="features container">
                <div class="row text-center">
                    <div class="col-md-4 col-sm-2">
                        <div class="feature-thumb card">
                            <div class="card-text">
                                <span>01</span>
                                <h3>Trending Courses</h3>
                                <p>Known is free education HTML Bootstrap Template. You can download and use this for your website.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-2">
                        <div class="feature-thumb card">
                            <div class="card-text">
                                <span>02</span>
                                <h3>Books & Library</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-2">
                        <div class="feature-thumb card">
                            <div class="card-text">
                                <span>03</span>
                                <h3>Certified Teachers</h3>
                                <p>templatemo provides a wide variety of free Bootstrap Templates for you. Please tell your friends about us. Thank you.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Entrance'
}
</script>

<style scoped lang="scss">
    .entrance {
        background: url('https://static.vecteezy.com/system/resources/previews/001/937/625/non_2x/online-education-application-learning-worldwide-on-phone-mobile-website-background-social-distance-concept-the-classroom-training-course-library-illustration-flat-design-vector.jpg') no-repeat top center;
        background-size: cover;
        background-attachment: fixed;
        width: 100%;
        height: 500px;
        position: relative;
    }
    .entrance-div {
        position: absolute;
        bottom: 80px;
        right: 130px;
        padding: 30px 20px;
        max-width: 500px;
        font-family: Verdana, Geneva, sans-serif;
        /* background-color: #F5BA3A; */
        color: #fff;
        border-radius: 6px;
        background-color: rgba(245, 186, 58, .9);
    }
    .features {
        padding: 100px 0;
        display: flex;
    }
    .feature-thumb {
        border-radius: 6px;
        // box-shadow: 0 0 3px black;
        padding: 60px 35px;
        text-align: left;
        span {
            border-radius: 40%;
            display: inline-block;
            padding: 10px;
            color: white;
            background-color: #007694;
            box-sizing: border-box;
        }
        h3 {
            font-size: 24px;
            font-family: sans-serif;
            margin: 10px 0 10px;
        }
    }
</style>