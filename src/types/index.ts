import Vue from 'vue'
import { ConfigIe } from '../config/config';
import StringUtil from './StringUtil'
declare module 'vue/types/vue' {
    interface VueConstructor {
      $config:ConfigIe;
    }
  }
  


