<script>
export default {
  name: 'Navbar'
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light p-2">
    <div class="container-fluid">
      <a class="navbar-brand" to="#">
        <img
          src="@/assets/logo.jpg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        SESAME Promes
      </a>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto">
          <RouterLink to="/" class="nav-item nav-link active">Acceuil</RouterLink>
          <RouterLink to="/" class="nav-item nav-link">Speakers</RouterLink>
          <RouterLink to="/" class="nav-item nav-link">Sponsors</RouterLink>
          <RouterLink to="/" class="nav-item nav-link">Expo</RouterLink>
          <RouterLink to="/" type="button" class="btn btn-primary ms-2">Visiter</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
