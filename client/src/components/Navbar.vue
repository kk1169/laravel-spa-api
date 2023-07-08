<script>
export default {};
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary app-navbar">
        <div class="container">
            <a class="navbar-brand" href="#">TodoList</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"
                            >Task</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Summary</a>
                    </li>
                </ul>
                <div>
                    <button class="btn btn-outline-success" type="submit">
                        Login
                    </button>
                    <button class="btn btn-success mx-2" type="submit">
                        Register
                    </button>
                    <button class="btn btn-outline-success" type="submit">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
<style></style>
