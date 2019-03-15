<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="main-container">

                    <div class="row language-row">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span><img src="../images/design/Vector.png" alt=""></span> English
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Ru</a>
                                <a class="dropdown-item" href="#">Uzb</a>
                            </div>
                        </div>
                    </div>
                    <div class="inner-container">
                        <div class="row header-row">
                            <div class="col-12">
                                <img src="../images/items/gerb_uzbekistana.png" class="emblem float-left" alt="...">
                                <h1 class="header">
                                    Toshkent viloyati nazorat ijrosi tizimi
                                </h1>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <h2 class="header-auth">
                                authorization
                            </h2>
                        </div>
                        <div class="row">
                            <form @submit.prevent="loginRequest">
                                <div class="form-group">
                                    <input
                                            type="text"
                                            class="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Username"
                                            v-model="login">
                                </div>
                                <div class="form-group">
                                    <input type="password"
                                           class="form-control"
                                           placeholder="Password"
                                           v-model="password"
                                    >
                                </div>
                                <div class="form-group form-check">
                                    <label class="custom-control fill-checkbox">
                                        <input type="checkbox" class="fill-control-input">
                                        <span class="fill-control-indicator"></span>
                                        <span class="fill-control-description">Remember me</span>
                                    </label>

                                </div>

                                <button type="submit" class="btn btn-primary">Sign in</button>
                                <div class="row justify-content-center mt-lg-4 mt-sm-3 mt-2">
                                    <button class="btn btn-border-bottom">Forgot password?</button>

                                </div>
                                <div class="row justify-content-center  mt-lg-4 mt-sm-3 mt-2">
                                    <span class="btn-span">Don’t have account? </span> <button class="btn btn-border-bottom">Join now</button>
                                </div>
                            </form>

                        </div>

                    </div>
                    <div class="row justify-content-center">
                        <p class="inform">By signing up you are agree to our Terms of services and Privacy Policy.</p>
                    </div>
                    <div class="alert alert-danger" v-if="error">{{error}}</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Login',
        data(){

            return {
                login : "",
                password : "",
                error: false,
            }
        },
        methods: {
            loginRequest () {
                this.$http.post('/auth', { login: this.login, password: this.password })
                    .then(request => this.loginSuccessful(request))
                    .catch(() => this.loginFailed());

            },
            loginSuccessful (req) {
                if (!req.data.token) {
                    this.loginFailed();
                    return
                }

                localStorage.token = req.data.token;
                this.error = false;

                this.$router.replace(this.$route.query.redirect || '/home')
                console.log("login: "+this.login);
                console.log("password: "+this.password);
                console.log("token: "+localStorage.token);
            },
            loginFailed () {
                this.error = 'Login failed!';
                delete localStorage.token
            }

        }
    }
</script>

<style scoped>

    .main-container{
        width: 100%;
        height: auto;
        background: #ffffff;
        border: 1px solid #ebebeb;
        box-sizing: border-box;
        box-shadow: 0 11px 16px rgba(0,0,0,0.16);
        border-radius: 9px;
        margin-top: 25px;
        margin-left: 15%;
        margin-right:15%;
        position: relative;
        padding: 2% 5%;
    }
    .btn-default{
        border: 1px solid #e9e9e9;
        box-sizing: border-box;
        border-radius: 4px;
        background-color: white;
        color: rgba(80, 93, 118, 0.65);
        font-family: 'Lato', sans-serif;
        font-size: 13px;
        padding: 4px 10px;
        text-transform: uppercase;

    }
    .btn-default img{
        vertical-align: inherit;
        margin: -1px 2px;
    }

    .inner-container{
        padding: 30px 10px;
    }
    .header-row{
        margin: 0 8%;
    }
    .emblem{
        margin: 2px;
    }
    .header{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        font-size: 27px;
        text-align: center;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #3F4756;
    }

    .header-auth{
        /* authorization */
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 20px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding-top: 23px;
        color: #5CA7FF;
    }
    form{
        padding: 1% 15%;
        width: 100%;

    }
    .form-group input{
        border-radius: 2px;
        border: 1px solid #B8B8B8;
        box-sizing: border-box;
    }

    ::placeholder{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        font-size: 12px;
        letter-spacing: 0.23em;
        color: #BDBDBD!important;
    }

    .btn-primary{
        width: 100%;
        background: #5CA7FF;
        border: #5CA7FF;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 2px;
        /* SIGN IN */
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 15px;
        text-align: center;
        letter-spacing: 0.19em;
        text-transform: uppercase;
        color: #FFFFFF;
        padding: 10px;
    }
    .form-group{
        background-color: #FFFFFF!important;
    }
    .form-check-input{
        margin-top: .5rem;
        margin-left: -1rem;
        width: 2%;
        border: 0.8px solid #B8B8B8;
        box-sizing: border-box;
    }
    .form-check-label{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 10px;
        color: #9B9B9B;
    }

    .btn-border-bottom{
        /* Forgot password? */
        background: none;
        border-bottom: 1px solid #3F4756;
        border-radius: 0;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: 20px;
        font-size: 17px;
        text-align: center;
        color: #3F4756;
        padding: 0 0;
    }
    .custom-control{
        padding-left: 1rem;
    }
    .custom-control.fill-checkbox .fill-control-input {
        display: none;
    }
    .form-check{
        padding-left: 0;
    }
    .custom-control.fill-checkbox .fill-control-indicator {
        border-radius: 0;
        display: inline-block;
        position: absolute;
        top: 7px;
        left: 0;
        width: 12px;
        height: 12px;
        border: 1px solid #e5e5e5;
        transition: .3s;
        background-color: transparent;
        background-size: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("../views/images/design/checked.png");
    }

    .custom-control.fill-checkbox .fill-control-input:checked ~ .fill-control-indicator {
        background-color: #FFFFFF;
        border-color: #e5e5e5;
        background-size: 88%;
    }
    .fill-control-description{
        /* Remember me */
        position: absolute;
        width: 100%;
        left: 22px;
        top: 6px;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 10px;
        text-align: left;

        color: #9B9B9B;


    }
    .btn-span{
        /* Don’t have account? Join now */
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: 20px;
        font-size: 17px;
        text-align: center;
        margin-top: 2px;
        margin-right: 8px;
        color: #3F4756;
        display: block;
    }
    .inform{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        font-size: 18px;
        text-align: center;
        margin-bottom: -1%;
        color: #979797;
        letter-spacing: 2px;
    }
</style>