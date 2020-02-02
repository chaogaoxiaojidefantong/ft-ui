import Vue from 'vue'
import { ConfigIe } from '../config/config';
declare module 'vue/types/vue' {
    interface VueConstructor {
      $config:ConfigIe;
    }
  }

