<template>
    <div class="foot">
        <!--底部工具栏-->
		<div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default my-navbar" id="">
			<ul class="am-navbar-nav am-cf am-avg-sm-4">
				<li>
					<a href="tel:123456789" class="">
						<span class="am-icon-phone"></span>
						<span class="am-navbar-label">电话</span>
					</a>
				</li>
				<li data-am-navbar-qrcode=picture/weixin.png>
					<a href="###" class="">
						<span class="am-icon-qrcode"></span>
						<span class="am-navbar-label">二维码</span>
					</a>
				</li>
				<li>
					<a href="Contact.html" class="">
						<span class="am-icon-download"></span>
						<span class="am-navbar-label">地图</span>
					</a>
				</li>
			</ul>
		</div>

		<!--底部工具栏  end-->
    </div>
</template>
<script>
export default {
    name:"v-foot"
}
</script>

