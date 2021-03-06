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
package org.auraframework.util.type.converter;

import org.auraframework.util.type.Converter;

/**
 * Used by aura.util.type.TypeUtil
 */
public class IntegerToStringConverter implements Converter<Integer, String> {

    @Override
    public String convert(Integer value) {
        return value.toString();
    }

    @Override
    public Class<Integer> getFrom() {
        return Integer.class;
    }

    @Override
    public Class<String> getTo() {
        return String.class;
    }

    @Override
    public Class<?>[] getToParameters() {
        return null;
    }

}
