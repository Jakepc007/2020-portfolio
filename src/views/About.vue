<template>
  <div>
    <div class="splash">
      <div>
        <h1 class="primary--text">About Me</h1>
        <h2>
          Proffesionally,
          <span class="primary--text text--lighten-4">and Personally.</span>
        </h2>
      </div>
    </div>
    <div class="splash-cont">
      <h2 class="primary--text">Introduction 👋</h2>
      <span class="primary--text text--darken-3">
        So I'm Jake. I'm glad you've taken the time to check out my personal website,
        and if you're an employer looking for a motivated young junior developer,
        <span
          class="font-weight-bold primary--text text--darken-1"
        >then I'm your guy!</span>
      </span>

      <h2 class="primary--text mt-6">Education 👨‍🎓</h2>
      <span class="primary--text text--darken-3">
        I'm currently at
        <span
          class="font-weight-bold primary--text text--darken-1"
        >Cardiff University</span> studying
        <span
          class="font-weight-bold primary--text text--darken-1"
        >Applied Software Engineering.</span>
        These are some of the modules I've completed already.
        <br />
        <ul>
          <li>Computational Thinking with Python</li>
          <li>Commercial Applications with Java</li>
          <li>Cyber Security</li>
          <li>Perfomance and Scalability</li>
          <li>
            Introduction to Web Development |
            <span
              class="font-weight-bold primary--text text--darken-1"
            >my favourite 😻</span>
          </li>
        </ul>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  margin-left: 2rem;
  margin-right: 2rem;
  max-width: 70%;

  @media screen and (min-width: 800px) {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>