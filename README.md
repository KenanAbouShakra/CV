# CV
body {
    font-family: 'Roboto', sans-serif;
    color: #333333;
    background: #f5f5f5;
    font-size: 14px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 700;
    margin: 0 0 10px;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
    color: #0056b3;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
}

a:focus {
    text-decoration: none;
}

p {
    line-height: 1.5;
    margin: 0 0 15px;
}

.wrapper {
    background: #ffffff;
    max-width: 960px;
    margin: 20px auto;
    position: relative;
    padding: 20px;
    -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar-wrapper {
    background: #343a40;
    position: absolute;
    right: 0;
    width: 300px;
    height: 100%;
    min-height: 800px;
    color: #ffffff;
    padding: 20px;
}

.profile-img {
    width: 150px;
    height: 150px;
    /* Kvadratisk bilde */
    border-radius: 10%;
    object-fit: cover;
    margin: 0 auto 20px;
    display: block;
}

.phone a {
    color: inherit;
    text-decoration: none;
}

.phone a:hover {
    color: #131313;
    text-decoration: underline;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
}

.phone .svg-inline--fa {
    margin-right: 5px;
    font-size: 18px;
    vertical-align: middle;
}

.main-wrapper {
    background: #ffffff;
    padding: 60px 30px;
    padding-right: 360px;
    box-sizing: border-box;
}

.main-wrapper .section-title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    color: #39383a;
    position: relative;
    margin-top: 0;
    margin-bottom: 20px;
}

.main-wrapper .section-title .icon-holder {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    display: inline-block;
    color: #ffffff;
    border-radius: 50%;
    background: #007bff;
    text-align: center;
    font-size: 16px;
    position: relative;
    top: -2px;
}

.main-wrapper .section-title .icon-holder .svg-inline--fa {
    font-size: 14px;
    margin-top: 8px;
}

.main-wrapper .section {
    margin-bottom: 30px;
}

.main-wrapper .experiences-section .item {
    margin-bottom: 30px;
}

.footer {
    padding: 30px;
    padding-top: 60px;
    background: #f5f5f5;
    text-align: center;
}

.footer .copyright {
    line-height: 1.6;
    color: #545E6C;
    font-size: 13px;
}

.footer .fa-heart {
    color: #fb866a;
}

@media (max-width: 767.98px) {
    .sidebar-wrapper {
        position: static;
        width: 100%;
        min-height: auto;
        padding: 20px 0;
    }
    .main-wrapper {
        padding: 30px;
        padding-top: 60px;
        padding-right: 30px;
    }
    .main-wrapper .time {
        position: static;
        display: block;
        margin-top: 5px;
    }
    .main-wrapper .upper-row {
        margin-bottom: 0;
    }
}

@media (min-width: 992px) {
    .skillset .level-title {
        display: inline-block;
        float: left;
        width: 30%;
        margin-bottom: 0;
    }
}

@media (min-width: 767.98px) {
    .sidebar-wrapper {
        left: 0;
    }
    .main-wrapper {
        padding: 60px;
        padding-left: 360px;
    }
}
