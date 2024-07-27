[![HitCount](http://hits.dwyl.com/aliumujib/artic.svg)](http://hits.dwyl.com/aliumujib/artic)

# Apple Design Design Mashup

Design Animation Mash-up: Apple Series 8" is a project that demonstrates the potential of dynamic animations in e-commerce web design. This concept reimagines a product landing page for Apple's Series 8 device, leveraging engaging visual effects to enhance user engagement and potentially drive immediate purchase decisions. The project showcases how strategic animation can be employed to create a compelling and interactive product showcase in a digital retail environment.

## UI

The UI was graciously designed by [Victor Adeyemo](https://www.linkedin.com/in/adeyemo-victor/]).

<img src="art/dribbble_shot_HD.png" />

## Architecture

The app leverages uni-directional data flow the in building a predictable state machine for every screen. To achieve this, the ViewModel class of the `Android Architecture Components` and Kotlin `Flow` were used. A lot of the architecture decisions were inspired by the talk detailed in [these](https://speakerdeck.com/ragdroid/flowing-things-not-so-strange-in-the-mvi-world) slides.

<img src="art/flow.png" />

Source: [Building MVI apps with Roxie](https://proandroiddev.com/unidirectional-data-flow-with-roxie-bec546c18598).

</br>
Another interesting part of the architecture is the use of dynamic feature modularisation to seperate feature related code into the appropriate modules and Dagger 2 for dependency injection in the feature modules.
</br>
</br>

<img src="art/feature_mod.png" />

Source: [Android Components Architecture in a Modular Word](https://hackernoon.com/android-components-architecture-in-a-modular-word-d0k32i6).

## Libraries
**Dagger2** - Dagger2 was used for dependency injection.</br>
**Kotlin Flow** - Flow was used for threading and data stream management.</br>
**Retrofit2** - Network calls</br>
**AndroidKtx** - For cool extensions to Android classes.</br>
**Architecture Components** - For Lifecycle managment in the presentation layer, persistence.</br>
**MockK** - For mocking test dependencies.</br>
**Truth** - For Unit test assertions etc.</br>
**Konveyor** - For generating random data for tests.</br>
**Espresso** - For UI testing.</br>


## Build Instructions
- Clone repository.</br>
- Run with Android Studio 4.0 canary 3 and above. </br>

## References
- [Android Components Architecture in a Modular Word](https://hackernoon.com/android-components-architecture-in-a-modular-word-d0k32i6).
- [Klayground](https://github.com/ragdroid/klayground).

## License
```
Copyright 2023 Jesse Akoh

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
