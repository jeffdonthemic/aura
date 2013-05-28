/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {"HK":[{"name":"HK","_from":"1941","_to":"only","type":"-","in":"Apr","on":"1","at":"3:30","_save":"1:00","letter":"S"},{"name":"HK","_from":"1941","_to":"only","type":"-","in":"Sep","on":"30","at":"3:30","_save":"0","letter":"-"},{"name":"HK","_from":"1946","_to":"only","type":"-","in":"Apr","on":"20","at":"3:30","_save":"1:00","letter":"S"},{"name":"HK","_from":"1946","_to":"only","type":"-","in":"Dec","on":"1","at":"3:30","_save":"0","letter":"-"},{"name":"HK","_from":"1947","_to":"only","type":"-","in":"Apr","on":"13","at":"3:30","_save":"1:00","letter":"S"},{"name":"HK","_from":"1947","_to":"only","type":"-","in":"Dec","on":"30","at":"3:30","_save":"0","letter":"-"},{"name":"HK","_from":"1948","_to":"only","type":"-","in":"May","on":"2","at":"3:30","_save":"1:00","letter":"S"},{"name":"HK","_from":"1948","_to":"1951","type":"-","in":"Oct","on":"lastSun","at":"3:30","_save":"0","letter":"-"},{"name":"HK","_from":"1952","_to":"only","type":"-","in":"Oct","on":"25","at":"3:30","_save":"0","letter":"-"},{"name":"HK","_from":"1949","_to":"1953","type":"-","in":"Apr","on":"Sun>=1","at":"3:30","_save":"1:00","letter":"S"},{"name":"HK","_from":"1953","_to":"only","type":"-","in":"Nov","on":"1","at":"3:30","_save":"0","letter":"-"},{"name":"HK","_from":"1954","_to":"1964","type":"-","in":"Mar","on":"Sun>=18","at":"3:30","_save":"1:00","letter":"S"},{"name":"HK","_from":"1954","_to":"only","type":"-","in":"Oct","on":"31","at":"3:30","_save":"0","letter":"-"},{"name":"HK","_from":"1955","_to":"1964","type":"-","in":"Nov","on":"Sun>=1","at":"3:30","_save":"0","letter":"-"},{"name":"HK","_from":"1965","_to":"1976","type":"-","in":"Apr","on":"Sun>=16","at":"3:30","_save":"1:00","letter":"S"},{"name":"HK","_from":"1965","_to":"1976","type":"-","in":"Oct","on":"Sun>=16","at":"3:30","_save":"0","letter":"-"},{"name":"HK","_from":"1973","_to":"only","type":"-","in":"Dec","on":"30","at":"3:30","_save":"1:00","letter":"S"},{"name":"HK","_from":"1979","_to":"only","type":"-","in":"May","on":"Sun>=8","at":"3:30","_save":"1:00","letter":"S"},{"name":"HK","_from":"1979","_to":"only","type":"-","in":"Oct","on":"Sun>=16","at":"3:30","_save":"0","letter":"-"}]},
        zones: {"Asia/Hong_Kong":[{"name":"Asia/Hong_Kong","_offset":"7:36:36","_rule":"-","format":"LMT","_until":"1904 Oct 30"},{"name":"Asia/Hong_Kong","_offset":"8:00","_rule":"HK","format":"HK%sT","_until":"1941 Dec 25"},{"name":"Asia/Hong_Kong","_offset":"9:00","_rule":"-","format":"JST","_until":"1945 Sep 15"},{"name":"Asia/Hong_Kong","_offset":"8:00","_rule":"HK","format":"HK%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);