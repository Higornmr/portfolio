<template>
    <div class="flex justify-center w-full px-3 h-[60px] top-0 z-50">
        <nav class="flex items-center justify-center w-full max-w-max-w">

            <!-- MENU DESKTOP -->
            <ul class="items-center gap-11 hidden lg:flex">
                <li class="relative" v-for="item in state.menuItems" :key="item.value">
                    <a :href="item.link" class="menu__link text-4xl">
                        {{ item.label }}
                    </a>
                </li>
            </ul>

            <!-- MENU MOBILE -->
            <div class="absolute right-[20px] lg:hidden">
                <!-- HAMBURGER -->
                <div class="menu__hamburger space-y-2 cursor-pointer"
                    :class="state.menuMobileIsOpen ? 'hamburgerIsActive' : ''" @click.stop="toogleMenu">
                    <div class="w-8 h-0.5 bg-white"></div>
                    <div class="w-8 h-0.5 bg-white"></div>
                    <div class="w-8 h-0.5 bg-white"></div>
                </div>

                <!-- LINKS MOBILE -->
                <div id="header-links-mobile"
                    class="absolute z-50 w-28 right-0 top-10 p-5 text-right h-fit transition-all duration-200 ease-in-out border-2  rounded-l-md bg-gradient-to-r from-bg-final to-bg-inicial"
                    :class="state.menuMobileIsOpen ? 'linksMobileVisible' : 'linksMobileHidden'">
                    <ul class="flex-col items-center text-center gap-11">
                        <li class="relative" v-for="item in state.menuItems" :key="item.value">
                            <a :href="item.link" class="menu__link text-xl">{{
                                item.label
                            }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
  
<script>
import { onBeforeUnmount, onMounted, reactive } from 'vue';

export default {
    name: 'Header',
    setup() {
        const state = reactive({
            menuItems: [
                {
                    label: "Início",
                    value: "inicio",
                    link: "#inicio",
                },
                {
                    label: "A Importância",
                    value: "importancia",
                    link: "#importancia",
                },
                {
                    label: "Contato",
                    value: "contato",
                    link: "#contato",
                },
            ],
            menuMobileIsOpen: false,
        })

        onMounted(() => {
            window.addEventListener("click", clickOutside);

            const links = document.querySelectorAll('.menu__link');

            links.forEach(link => {
              link.addEventListener('click', function(e) {
                e.preventDefault();

                const href = this.getAttribute('href');

                if (href.startsWith('#')) {
                  const section = document.querySelector(href);
                  
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              });
            });
        })

        onBeforeUnmount(() => {
            window.removeEventListener("click", clickOutside);
        })

        function clickOutside(event) {
            if (event.target.id !== 'header-links-mobile') {
                closeMenuMobile()
            }
        }

        function toogleMenu() {
            state.menuMobileIsOpen = !state.menuMobileIsOpen;
        }

        function openMenuMobile() {
            state.menuMobileIsOpen = true;
        }

        function closeMenuMobile() {
            state.menuMobileIsOpen = false;
        }

        return {
            state,
            toogleMenu,
            openMenuMobile
        }
    }
};
</script>
  
<style scoped>

/*HOVER LINKS*/
.menu__link {
    display: block;
    padding: 8px 0px;
    position: block;
}

.menu__link:after {
    content: "";
    position: block;
    top: 0;
    left: 0;
    border: 1px solid transparent;
    height: 0;
    width: 0;
}

.menu__link:hover:after {
    content: "";
    border-bottom: 1px solid white;
    border-left: none;
    border-top: none;
    height: 100%;
    width: 100%;
    transition: width 200ms ease-in-out;
}

/*MENU HAMBURGER*/
.menu__hamburger>div {
    transition: 200ms ease-in-out;
}

.menu__hamburger.hamburgerIsActive :first-child {
    transform: rotate(-225deg);
    position: relative;
    top: 10px;
}

.menu__hamburger.hamburgerIsActive :nth-child(2) {
    opacity: 0;
}

.menu__hamburger.hamburgerIsActive :last-child {
    transform: rotate(45deg);
    position: relative;
    top: -10px;
}

.linksMobileHidden {
    opacity: 0;
}

.linksMobileVisible {
    opacity: 1;
}
</style>