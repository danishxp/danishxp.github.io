<template>
    <b-container class="bv-example-row mb-3">
        <b-row cols="3">
            <b-col>
                <div>
                    <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators="true"
                        img-width="1024" img-height="480">
                        <b-carousel-slide 
                            img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
                        <b-carousel-slide 
                            img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
                        <b-carousel-slide 
                            img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
                    </b-carousel>
                </div>
            </b-col>
            <b-col cols="8">
                <h3>Single Room
                </h3>
                <p><span>1 bedroom</span><span>1 bathroom</span><span>1 Guest</span><span>91 Sq ft</span>
                </p>
                <ul>
                    <b-row cols="2" >
                        <b-col>
                            <li>Queen Bed</li>
                        </b-col>
                        <b-col>
                            <li>Queen Bed</li>
                        </b-col>
                        <b-col>
                            <li>Queen Bed</li>
                        </b-col>

                        <b-col>
                            <li>Queen Bed</li>
                        </b-col>
                        <b-col>
                            <li>Queen Bed</li>
                        </b-col>
                        </b-row>
                </ul>
            </b-col> 

        </b-row>
    </b-container>
</template>
<style scoped>
span {
    margin-right: 30px;

}
</style>