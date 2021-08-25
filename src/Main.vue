<template>
  <div class="main">
    <Navbar />
    <LandingPage />
    <AboutMe />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections
import LandingPage from "./sections/LandingPage";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";

export default {
  name: "Home",
  components: {
    // Components
    Navbar,
    Footer,
    // Sections
    LandingPage,
    AboutMe,
    ContactMe,
  },
};
</script>

<style lang="scss">
.main {
  background-color: $background;
  height: 100%;
  width: 100vw;
  padding: 10px 10rem;
}

section {
  height: 100vh;
}
</style>
