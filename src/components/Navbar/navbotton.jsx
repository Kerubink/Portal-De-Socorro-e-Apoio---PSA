import React from 'react';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';

function Navbotton() {
  return (
    <div class={`${styles.navbotton} bg-white w-full fixed bottom-0 shadow-lg rounded-2xl`}>
    <div class="flex">
        <div class="flex-1 group">
            <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                <span class="block px-1 pt-1 pb-1">
                    <i class="fi fi-rr-house-blank"></i>
                    <span class="block text-xs pb-2">Home</span>
                    <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                </span>
            </a>
        </div>
        <div class="flex-1 group">
            <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                <span class="block px-1 pt-1 pb-1">
                    <i class="fi fi-rr-box-open"></i>
                    <span class="block text-xs pb-2">Doar</span>
                    <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                </span>
            </a>
        </div>
        <div class="flex-1 group">
            <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                <span class="block px-1 pt-1 pb-1">
                    <i class="fi fi-rr-box-circle-check"></i>
                    <span class="block text-xs pb-2">Doações</span>
                    <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                </span>
            </a>
        </div>
        <Link to='/'>
            <div class="flex-1 group">
                <a href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-red-700 ">
                    <span class="block px-1 pt-1 pb-1">
                        <i class="fi fi-rr-sign-out-alt"></i>
                        <span class="block text-xs pb-2">Sair</span>
                    </span>
                </a>
            </div>
        </Link>
    </div>
</div>
  );
}

export default Navbotton;
