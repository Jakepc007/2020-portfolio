<template>
  <div>
    <div class="splash">
      <div style="position: relative" class="hover-me" >
        <div style="position: absolute; top: -70px; left: 47px; width: 100px; height: 80px; border-radius: 30%; display: grid; place-items: center" class="background hover-pointer">
          <h1 class="primary--text"><v-icon :color="`primary`" large>mdi-linkedin</v-icon></h1>
        </div>
        <a href="https://www.linkedin.com/in/jake-morris-a188b81a2/">
        <div style="border-radius: 50%; height: 200px" class="hover-img">
            <img @click="hasClickedLink = true" style="border-radius: 30%; overflow: hidden" height="200px" src="https://media-exp3.licdn.com/dms/image/C4E03AQGJr_B-tB_Wlw/profile-displayphoto-shrink_400_400/0/1606922635144?e=1629331200&v=beta&t=YQDPj2n2tzjvTd4zWJWT7j__lqBHb8QYF9Mi-HNEfJ4" />  
        </div>
          </a>
      </div>
    </div>
    <div class="splash-cont">
      <h2 class="primary--text">Introduction 👋</h2>
      <span class="font--text">
        So I'm Jake. I'm glad you've taken the time to check out my personal website,
        and if you're an employer looking for a motivated young junior developer,
        <span
          class="font-weight-bold primary--text text--darken-1"
        >then I'm your guy!</span>
      </span>

      <h2 class="primary--text mt-6">Education 👨‍🎓</h2>
      <span class="font--text">
        I've recently graduated
        <span
          class="font-weight-bold primary--text text--darken-1"
        >Cardiff University</span> studying
        <span
          class="font-weight-bold primary--text text--darken-1"
        >Applied Software Engineering.</span>
        These are some of the modules I did.

        <ul class="mt-2">
          <li>Computational Thinking with Python</li>
          <li>Commercial Applications with Java</li>
          <li>Cyber Security</li>
          <li>Perfomance and Scalability</li>
          <li>
            Introduction to Web Development 
            <!-- <span
              class="font-weight-bold primary--text text--darken-1"
            >my favourite 😻</span> -->
          </li>
        </ul>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    hasClickedLink: false
  }),

  created() {
    console.log( 5 + 5 )
  }
}
</script>

<style lang="scss" scoped>
.fade {
  &-enter {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.8s;
  }

  &-leave {
    opacity: 0;
  }
}

.splash {
  padding-left: 2rem;
  padding-right: 2rem;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-cont {
  min-height: 30vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 100%;

  @media screen and (min-width: 800px) {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}

.hover-me {
  transition: 0.3s;

  .hover-pointer { 
    transition: 0.3s;
    box-shadow: 0 10px 30px transparent;

    h1 {
      transition: 0.3s;
    }
  }

  .hover-img {
    transition: 0.3s;
    box-shadow: 0 10px 30px #00000022;
    background: transparent;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    transition: 0.4s;

    .hover-img {
      transition: 0.4s;
      box-shadow: 0 10px 30px #00000055;
    }

    .hover-pointer {
      transform: translateY(15px);
      transition: 0.4s;
    }
  }
}
</style>