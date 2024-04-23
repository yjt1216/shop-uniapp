<script setup>
  import { onLaunch, onShow, onError } from '@dcloudio/uni-app';
  
  onLaunch(() => {
    console.log('onLaunch');
  });

  onError((err) => {
    console.log('AppOnError:', err);
  });

  onShow(() => {
    console.log('onShow');
  });
</script>

<style lang="scss">
  
</style>
