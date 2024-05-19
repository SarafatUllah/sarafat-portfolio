<script setup>
import { storeToRefs } from "pinia";
import { useSelectedSectionStore } from "~/stores/selectedSection";
import { useHeaderSectionStore } from "~/stores/headerSection";

const { setSelectedSection, setActive } = useSelectedSectionStore();
const { currentSection } = storeToRefs(useSelectedSectionStore());
const { setShowNavbar } = useHeaderSectionStore();
const { showNavbar } = storeToRefs(useHeaderSectionStore());
const selectedSection = (value) => {
  setShowNavbar();
  if (value !== currentSection.value) {
    setActive(currentSection.value);
    setTimeout(() => {
      setActive(value);
      setSelectedSection(value);
    });
  }
};
</script>

<template>
  <header
    class="w-full h-[8rem] py-[2rem] px-[9%] bg-transparent flex justify-between items-center"
  >
    <div class="logo">
      <!-- <img src="" alt="Sarafat Logo" /> -->
      <p
        class="text-[2.5rem] text-[var(--text-color)] font-semibold cursor-pointer"
        @click.stop="selectedSection('sections-home')"
      >
        Sarafat.
      </p>
    </div>
    <ClientOnly>
      <div
        class="text-[3.6rem] text-[var(--text-color)] cursor-pointer lg:hidden text-active"
        :class="showNavbar ? 'active' : ''"
        @click="setShowNavbar"
      >
        <fa :icon="['fa', 'bars']" />
      </div>
    </ClientOnly>
    <nav
      class="navbar flex space-x-[3.5rem] items-center text-[var(--text-color)] text-[1.7rem] font-medium"
      :class="showNavbar ? 'active' : ''"
    >
      <button
        class="lg:w-auto w-full h-full !text-left"
        :class="currentSection === 'sections-home' ? 'active' : ''"
        @click.stop="selectedSection('sections-home')"
      >
        Home
      </button>
      <button
        class="lg:w-auto w-full h-full !text-left"
        :class="currentSection === 'sections-about' ? 'active' : ''"
        @click.stop="selectedSection('sections-about')"
      >
        About Me
      </button>
      <button
        class="lg:w-auto w-full h-full !text-left"
        :class="currentSection === 'sections-education' ? 'active' : ''"
        @click.stop="selectedSection('sections-education')"
      >
        My Journey
      </button>
      <!-- <button
        class="lg:w-auto w-full h-full !text-left"
        :class="currentSection === 'sections-experience' ? 'active' : ''"
        @click.stop="selectedSection('sections-experience')"
      >
        My Jounney
      </button> -->
      <button
        :class="currentSection === 'sections-skills' ? 'active' : ''"
        @click.stop="selectedSection('sections-skills')"
      >
        Skills
      </button>
      <!-- <button
        :class="currentSection === 'sections-projects' ? 'active' : ''"
        @click.stop="selectedSection('sections-projects')"
      >
        Projects
      </button> -->
      <button
        class="lg:w-auto w-full h-full !text-left"
        :class="currentSection === 'sections-contact' ? 'active' : ''"
        @click.stop="selectedSection('sections-contact')"
      >
        Contact
      </button>
      <span class="active-nav"></span>
    </nav>
  </header>
</template>
