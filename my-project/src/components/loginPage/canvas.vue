<template>
    <div id="canvas">
        <canvas ref="canvas" width="300" height="300"></canvas>
    </div>
</template>

<script>
let data = {
    step: 0,
    number: 0
};
export default {
    data() {
        return data;
    },
    props: ['number'],
    mounted() {
        var canvas = this.$refs.canvas;
        var ctx = canvas.getContext('2d');
        let width = canvas.width;
        let height = canvas.height;
        let clockR = width / 3;

        ctx.translate(width / 2, height / 2);
        ctx.save();

        // 画扇形倒计时
        ctx.save();
        function drawArc(s, e) {
            ctx.fillStyle = 'rgba(0,0,0,.3)';
            ctx.beginPath();
            ctx.arc(0, 0, clockR, s, e, false);
            ctx.lineTo(0, 0);
            ctx.fill();
        }

        var step = 1,
            startAngle = 0,
            endAngle = 0;

        let n = 20; // count of arc

        let stopSport = setInterval(function() {
            if (step <= n) {
                startAngle = endAngle;
                endAngle = step * 2 * Math.PI / n;
                drawArc(startAngle, endAngle);
                step++;
            } else {
                clearInterval(stopSport);
            }
        }, 100);
        ctx.restore();
    }
};
</script>

<style lang="scss" scoped>
canvas {
    background: url("../../../static/canvasBg.png") no-repeat center;
    background-size: 68% 68%;
    transition: all 0.5 linear;
}
</style>


