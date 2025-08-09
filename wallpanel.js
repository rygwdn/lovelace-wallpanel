(function() {
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o$1) {
			return typeof o$1;
		} : function(o$1) {
			return o$1 && typeof Symbol == "function" && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
		}, _typeof(o);
	}
	function toPrimitive(t, r) {
		if (_typeof(t) != "object" || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (e !== void 0) {
			var i = e.call(t, r || "default");
			if (_typeof(i) != "object") return i;
			throw TypeError("@@toPrimitive must return a primitive value.");
		}
		return (r === "string" ? String : Number)(t);
	}
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return _typeof(i) == "symbol" ? i : i + "";
	}
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c), u = i.value;
		} catch (n$1) {
			return void e(n$1);
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
		return function() {
			var t = this, e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n$1) {
					asyncGeneratorStep(a, r, o, _next, _throw, "next", n$1);
				}
				function _throw(n$1) {
					asyncGeneratorStep(a, r, o, _next, _throw, "throw", n$1);
				}
				_next(void 0);
			});
		};
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r$1) {
				return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = arguments[r] == null ? {} : arguments[r];
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
				_defineProperty(e, r$1, t[r$1]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
				Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
			});
		}
		return e;
	}
	let version = "4.54.2", defaultConfig = {
		enabled: !1,
		enabled_on_views: [],
		debug: !1,
		wait_for_browser_mod_time: .25,
		log_level_console: "info",
		alert_errors: !0,
		hide_toolbar: !1,
		keep_toolbar_space: !1,
		hide_toolbar_action_icons: !1,
		hide_toolbar_on_subviews: !1,
		hide_sidebar: !1,
		fullscreen: !1,
		z_index: 1e3,
		idle_time: 15,
		fade_in_time: 3,
		fade_out_time_motion_detected: 1,
		fade_out_time_screensaver_entity: 3,
		fade_out_time_browser_mod_popup: 1,
		fade_out_time_interaction: .3,
		crossfade_time: 3,
		display_time: 15,
		keep_screen_on_time: 0,
		black_screen_after_time: 0,
		control_reactivation_time: 1,
		screensaver_start_navigation_path: "",
		screensaver_stop_close_browser_mod_popup: !1,
		screensaver_entity: "",
		stop_screensaver_on_mouse_move: !0,
		stop_screensaver_on_mouse_click: !0,
		stop_screensaver_on_key_down: !0,
		stop_screensaver_on_location_change: !0,
		disable_screensaver_on_browser_mod_popup: !1,
		disable_screensaver_on_browser_mod_popup_func: "",
		disable_screensaver_when_assist_active: !0,
		show_images: !0,
		image_url: "https://picsum.photos/${width}/${height}?random=${timestamp}",
		image_url_entity: "",
		media_entity_load_unchanged: !0,
		iframe_load_unchanged: !1,
		iframe_interaction: !1,
		immich_api_key: "",
		immich_album_names: [],
		immich_shared_albums: !0,
		immich_tag_names: [],
		immich_persons: [],
		immich_memories: !1,
		immich_resolution: "preview",
		image_fit_landscape: "cover",
		image_fit_portrait: "contain",
		media_list_update_interval: 3600,
		media_list_max_size: 500,
		media_order: "random",
		exclude_filenames: [],
		exclude_media_types: [],
		exclude_media_orientation: "",
		image_background: "color",
		video_loop: !1,
		video_volume: 0,
		touch_zone_size_next_image: 15,
		touch_zone_size_previous_image: 15,
		show_progress_bar: !1,
		show_image_info: !1,
		fetch_address_data: !1,
		image_info_template: "${DateTimeOriginal}",
		info_animation_duration_x: 0,
		info_animation_duration_y: 0,
		info_animation_timing_function_x: "ease",
		info_animation_timing_function_y: "ease",
		info_move_pattern: "random",
		info_move_interval: 0,
		info_move_fade_duration: 2,
		image_animation_ken_burns: !1,
		image_animation_ken_burns_zoom: 1.3,
		image_animation_ken_burns_delay: 0,
		image_animation_ken_burns_duration: 0,
		image_animation_ken_burns_animations: ["simple"],
		camera_motion_detection_enabled: !1,
		camera_motion_detection_facing_mode: "user",
		camera_motion_detection_threshold: 5,
		camera_motion_detection_capture_width: 64,
		camera_motion_detection_capture_height: 48,
		camera_motion_detection_capture_interval: .3,
		camera_motion_detection_capture_visible: !1,
		custom_css: "",
		style: {},
		badges: [],
		cards: [],
		views: [],
		content_interaction: !1,
		profile: "",
		profile_entity: "",
		profiles: {}
	}, renamedConfigOptions = {
		image_excludes: "exclude_filenames",
		image_fit: "image_fit_landscape",
		image_order: "media_order",
		enabled_on_tabs: "enabled_on_views",
		image_list_update_interval: "media_list_update_interval",
		screensaver_stop_navigation_path: "screensaver_start_navigation_path",
		card_interaction: "content_interaction"
	}, dashboardConfig = {}, config = {}, currentLocation = null, activePanel = null, activeTab = null, fullscreen = !1, wallpanel = null, skipDisableScreensaverOnLocationChanged = !1, classStyles = {
		"wallpanel-screensaver-image-background": {
			filter: "blur(15px)",
			background: "#00000000",
			"background-position": "center",
			"background-size": "cover"
		},
		"wallpanel-screensaver-image-info-container": {},
		"wallpanel-screensaver-image-info": {
			position: "absolute",
			bottom: "0.5em",
			right: "0.5em",
			"max-width": "calc(100% - 2em)",
			"max-height": "calc(100% - 5em)",
			padding: "0.1em 0.5em 0.1em 0.5em",
			"font-size": "2em",
			background: "#00000055",
			"backdrop-filter": "blur(2px)",
			"border-radius": "0.5rem"
		},
		"wallpanel-progress": {
			position: "absolute",
			bottom: "0",
			height: "2px",
			width: "100%"
		},
		"wallpanel-progress-inner": {
			height: "100%",
			"background-color": "white"
		},
		"wallpanel-message": {
			width: "30em",
			"max-width": "100%",
			"box-sizing": "border-box",
			padding: "1em",
			"border-radius": "0.5rem",
			border: "1px solid black",
			"box-shadow": "0 4px 12px rgba(0, 0, 0, 0.3)",
			"font-size": "1.5em",
			color: "white",
			cursor: "pointer",
			opacity: "0",
			transform: "translateX(100%)",
			transition: "all 0.4s ease"
		},
		"wallpanel-message.show": {
			opacity: 1,
			transform: "translateX(0)"
		},
		"wallpanel-message.error": {
			"background-color": "#f8d7da",
			color: "#721c24",
			"border-color": "#721c24"
		},
		"wallpanel-message.warning": {
			"background-color": "#fff3cd",
			color: "#856404",
			"border-color": "#856404"
		},
		"wallpanel-message.info": {
			"background-color": "#d1ecf1",
			color: "#0c5460",
			"border-color": "#0c5460"
		},
		"wallpanel-message.success": {
			"background-color": "#d4edda",
			color: "#155724",
			"border-color": "#155724"
		},
		"wallpanel-message-title": {
			"font-weight": "bold",
			"margin-bottom": "0.25rem"
		}
	}, mediaInfoCache = /* @__PURE__ */ new Map();
	function addToMediaInfoCache(mediaUrl, value) {
		for (; mediaInfoCache.size >= config.media_list_max_size;) {
			let oldestKey = mediaInfoCache.keys().next().value;
			mediaInfoCache.delete(oldestKey);
		}
		mediaInfoCache.set(mediaUrl, value);
	}
	let configEntityStates = {}, mediaEntityState = null, elHass = null, elHaMain = null, browserId = null, userId = null, userDisplayname = null;
	function isObject(item) {
		return item && typeof item == "object" && !Array.isArray(item);
	}
	function stringify(obj) {
		let processedObjects = [], json = JSON.stringify(obj, function(key, value) {
			if (typeof value == "object" && value) {
				if (processedObjects.indexOf(value) !== -1) return;
				processedObjects.push(value);
			}
			return value;
		});
		return json;
	}
	let logger = {
		messages: [],
		logLevel: "warn",
		addMessage: function(level, args) {
			if (!config.debug) return;
			let msg = {
				level,
				date: (/* @__PURE__ */ new Date()).toISOString(),
				text: "",
				objs: [],
				stack: ""
			}, err = /* @__PURE__ */ Error();
			err.stack && (msg.stack = err.stack.toString().replace(/^Error\r?\n/, ""));
			for (let i = 0; i < args.length; i++) i == 0 && (typeof args[0] == "string" || args[0] instanceof String) ? msg.text = args[i] : msg.objs.push(args[i]);
			logger.messages.push(msg), logger.messages.length > 1e3 && logger.messages.shift();
		},
		downloadMessages: function() {
			let data = new Blob([stringify(logger.messages)], { type: "text/plain" }), url = window.URL.createObjectURL(data), el = document.createElement("a");
			el.href = url, el.target = "_blank", el.download = "wallpanel_log.txt", el.click();
		},
		purgeMessages: function() {
			logger.messages = [];
		},
		log: function() {
			console.log.apply(this, arguments), logger.addMessage("info", arguments);
		},
		debug: function() {
			["debug"].includes(logger.logLevel) && console.debug.apply(this, arguments), logger.addMessage("debug", arguments);
		},
		info: function() {
			["debug", "info"].includes(logger.logLevel) && console.info.apply(this, arguments), logger.addMessage("info", arguments);
		},
		warn: function() {
			[
				"debug",
				"info",
				"warn"
			].includes(logger.logLevel) && console.warn.apply(this, arguments), logger.addMessage("warn", arguments);
		},
		error: function() {
			if ([
				"debug",
				"info",
				"warn",
				"error"
			].includes(logger.logLevel) && console.error.apply(this, arguments), logger.addMessage("error", arguments), config.alert_errors) {
				let msg = `Wallpanel error: ${stringify(arguments)}`;
				wallpanel ? wallpanel.showMessage("error", "Error", msg, 1e4) : alert(msg);
			}
		}
	};
	var ScreenWakeLock = class {
		constructor() {
			this.enabled = !1, this.error = null, this.nativeWakeLockSupported = "wakeLock" in navigator, this._lock = null, this._player = null, this._isPlaying = !1;
			let handleVisibilityChange = () => {
				logger.debug("handleVisibilityChange"), this.enabled && !document.hidden && this.enable();
			};
			document.addEventListener("visibilitychange", handleVisibilityChange), document.addEventListener("fullscreenchange", handleVisibilityChange), !this.nativeWakeLockSupported && (this._player = document.createElement("video"), this._player.setAttribute("id", "ScreenWakeLockVideo"), this._player.setAttribute("src", "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAA1NtZGF0AAACrwYF//+r3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE2NCByMzA5NSBiYWVlNDAwIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAyMiAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOi0zOi0zIGFuYWx5c2U9MHgzOjB4MTEzIG1lPWhleCBzdWJtZT03IHBzeT0xIHBzeV9yZD0yLjAwOjAuNzAgbWl4ZWRfcmVmPTEgbWVfcmFuZ2U9MTYgY2hyb21hX21lPTEgdHJlbGxpcz0xIDh4OGRjdD0xIGNxbT0wIGRlYWR6b25lPTIxLDExIGZhc3RfcHNraXA9MSBjaHJvbWFfcXBfb2Zmc2V0PS00IHRocmVhZHM9MSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MiBrZXlpbnQ9MjUwIGtleWludF9taW49MSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmNfbG9va2FoZWFkPTQwIHJjPWNyZiBtYnRyZWU9MSBjcmY9MjMuMCBxY29tcD0wLjYwIHFwbWluPTAgcXBtYXg9NjkgcXBzdGVwPTQgaXBfcmF0aW89MS40MCBhcT0xOjEuMjAAgAAAABFliIQAF85//vfUt8yy7VNwgQAAAAlBmiRsQXzn/vAAAAAJQZ5CeIL5z4aBAAAACQGeYXRBfOeGgAAAAAkBnmNqQXznhoEAAAAPQZpoSahBaJlMCC+c//7xAAAAC0GehkURLBfOf4aBAAAACQGepXRBfOeGgQAAAAkBnqdqQXznhoAAAAAPQZqpSahBbJlMCC+c//7wAAADs21vb3YAAABsbXZoZAAAAAAAAAAAAAAAAAAAA+gAACcQAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAALddHJhawAAAFx0a2hkAAAAAwAAAAAAAAAAAAAAAQAAAAAAACcQAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAIAAAACAAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAABAAAnEAAAgAAAAQAAAAACVW1kaWEAAAAgbWRoZAAAAAAAAAAAAAAAAAAAQAAAAoAAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAAgBtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAHAc3RibAAAAMBzdHNkAAAAAAAAAAEAAACwYXZjMQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAIAAgASAAAAEgAAAAAAAAAARVMYXZjNTkuMzcuMTAwIGxpYngyNjQAAAAAAAAAAAAAABj//wAAADZhdmNDAWQACv/hABlnZAAKrNlfllwEQAAAAwBAAAADAIPEiWWAAQAGaOvjxMhM/fj4AAAAABBwYXNwAAAAAQAAAAEAAAAUYnRydAAAAAAAAAKiAAACogAAABhzdHRzAAAAAAAAAAEAAAAKAABAAAAAABRzdHNzAAAAAAAAAAEAAAABAAAAYGN0dHMAAAAAAAAACgAAAAEAAIAAAAAAAQABQAAAAAABAACAAAAAAAEAAAAAAAAAAQAAQAAAAAABAAFAAAAAAAEAAIAAAAAAAQAAAAAAAAABAABAAAAAAAEAAIAAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAAKAAAAAQAAADxzdHN6AAAAAAAAAAAAAAAKAAACyAAAAA0AAAANAAAADQAAAA0AAAATAAAADwAAAA0AAAANAAAAEwAAABRzdGNvAAAAAAAAAAEAAAAwAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1OS4yNy4xMDA="), this._player.setAttribute("playsinline", ""), this._player.setAttribute("muted", ""), this._player.addEventListener("ended", () => {
				logger.debug("Video ended"), this.enabled && this.enable();
			}), this._player.addEventListener("playing", () => {
				logger.debug("Video playing"), this._isPlaying = !0;
			}), this._player.addEventListener("pause", () => {
				logger.debug("Video pause"), this._isPlaying = !1;
			}));
		}
		enable() {
			if (this.nativeWakeLockSupported) logger.debug("Requesting native screen wakelock"), navigator.wakeLock.request("screen").then((wakeLock) => {
				logger.debug("Request screen wakelock successful"), this._lock = wakeLock, this.enabled = !0, this.error = null;
			}).catch((e) => {
				this.enabled = !1, this.error = e, logger.warning(`Failed to request screen wakeLock: ${e}`);
			});
			else {
				logger.debug("Starting video player"), !this._player.paused && this._player._isPlaying && this._player.pause();
				let playPromise = this._player.play();
				playPromise && playPromise.then(() => {
					this.enabled = !0, this.error = null, logger.debug("Video play successful");
				}).catch((error) => {
					this.enabled = !1, this.error = error, logger.warning(`Failed to play video: ${error}`);
				});
			}
		}
		disable() {
			this.nativeWakeLockSupported ? (logger.debug("Releasing native screen wakelock"), this._lock && this._lock.release(), this._lock = null) : (logger.debug("Stopping video player"), !this._player.paused && this._player._isPlaying && this._player.pause()), this.enabled = !1;
		}
	}, CameraMotionDetection = class {
		constructor() {
			this.enabled = !1, this.error = !1, this.width = 64, this.height = 48, this.threshold = this.width * this.height * .05, this.captureInterval = 300, this.videoElement = document.createElement("video"), this.videoElement.setAttribute("id", "wallpanelMotionDetectionVideo"), this.videoElement.style.display = "none", document.body.appendChild(this.videoElement), this.canvasElement = document.createElement("canvas"), this.canvasElement.setAttribute("id", "wallpanelMotionDetectionCanvas"), this.canvasElement.style.display = "none", document.body.appendChild(this.canvasElement), this.context = this.canvasElement.getContext("2d", { willReadFrequently: !0 });
		}
		capture() {
			let diffPixels = 0;
			this.context.globalCompositeOperation = "difference", this.context.drawImage(this.videoElement, 0, 0, this.width, this.height);
			let diffImageData = this.context.getImageData(0, 0, this.width, this.height), rgba = diffImageData.data;
			for (let i = 0; i < rgba.length; i += 4) {
				let pixelDiff = rgba[i] + rgba[i + 1] + rgba[i + 2];
				if (pixelDiff >= 256 && (diffPixels++, diffPixels >= this.threshold)) break;
			}
			diffPixels >= this.threshold && (logger.debug("Motion detetcted:", diffPixels, this.threshold), wallpanel.motionDetected()), this.context.globalCompositeOperation = "source-over", this.context.drawImage(this.videoElement, 0, 0, this.width, this.height);
		}
		start() {
			if (!(this.enabled || this.error)) {
				if (!navigator.mediaDevices) {
					this.error = !0, logger.error("No media devices found");
					return;
				}
				this.enabled = !0, this.width = config.camera_motion_detection_capture_width, this.height = config.camera_motion_detection_capture_height, this.threshold = this.width * this.height * config.camera_motion_detection_threshold * .01, this.captureInterval = config.camera_motion_detection_capture_interval * 1e3, this.videoElement.width = this.width, this.videoElement.height = this.height, this.canvasElement.width = this.width, this.canvasElement.height = this.height, config.camera_motion_detection_capture_visible ? (this.canvasElement.style.position = "fixed", this.canvasElement.style.top = 0, this.canvasElement.style.left = 0, this.canvasElement.style.zIndex = 1e4, this.canvasElement.style.border = "1px solid black", this.canvasElement.style.display = "block") : this.canvasElement.style.display = "none", navigator.mediaDevices.getUserMedia({
					audio: !1,
					video: {
						facingMode: { ideal: config.camera_motion_detection_facing_mode },
						width: this.width,
						height: this.height
					}
				}).then((stream) => {
					this.videoElement.srcObject = stream, this.videoElement.play(), this.enabled && setInterval(this.capture.bind(this), this.captureInterval);
				}).catch((err) => {
					logger.error("Camera motion detection error:", err);
				});
			}
		}
		stop() {
			this.enabled && (this.enabled = !1, this.videoElement.pause(), this.videoElement.srcObject.getTracks().forEach((track) => {
				track.stop();
			}));
		}
	};
	function shuffleArray(array) {
		let result = array.slice();
		for (let i = result.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[result[i], result[j]] = [result[j], result[i]];
		}
		return result;
	}
	function getHaCameraStreamPlayerAndVideo(haCameraStreamElement) {
		if (!haCameraStreamElement.shadowRoot) return [null, null];
		let player = haCameraStreamElement.shadowRoot.querySelector("ha-web-rtc-player") || haCameraStreamElement.shadowRoot.querySelector("ha-hls-player");
		if (!player || !player.shadowRoot) return [player, null];
		let video = player.shadowRoot.querySelector("video");
		return [player, video];
	}
	function mergeConfig(target, ...sources) {
		if (!sources.length) return target;
		let source = sources.shift();
		if (isObject(target) && isObject(source)) for (let key in source) {
			let val = source[key];
			if (renamedConfigOptions[key] && (logger.warn(`The configuration option '${key}' has been renamed to '${renamedConfigOptions[key]}'. Please update your wallpanel configuration accordingly.`), key = renamedConfigOptions[key]), isObject(val)) target[key] || Object.assign(target, { [key]: {} }), mergeConfig(target[key], val);
			else {
				function replacer(match, entityId) {
					if (!(entityId in configEntityStates)) {
						configEntityStates[entityId] = "";
						let entity = (elHass.hass || elHass.__hass).states[entityId];
						entity ? configEntityStates[entityId] = entity.state : logger.error(`Entity used in placeholder not found: ${entityId} (${match})`);
					}
					let state = configEntityStates[entityId];
					return logger.debug(`Replace ${match} with ${state}`), state;
				}
				(typeof val == "string" || val instanceof String) && (val = val.replace("${browser_id}", browserId || "browser-id-unset"), val = val.replace(RegExp("\\$\\{entity:\\s*([^}]+\\.[^}]+)\\}", "g"), replacer)), typeof target[key] == "boolean" && (val = [
					"true",
					"on",
					"yes",
					"1"
				].includes(val.toString())), Object.assign(target, { [key]: val });
			}
		}
		return mergeConfig(target, ...sources);
	}
	function updateConfig() {
		let params = new URLSearchParams(window.location.search), oldConfig = config;
		config = {}, mergeConfig(config, defaultConfig), Object.keys(dashboardConfig).length === 0 && (dashboardConfig = getDashboardWallpanelConfig(), Object.keys(dashboardConfig).length === 0 && logger.debug("No wallpanel config found in dashboard config")), mergeConfig(config, dashboardConfig);
		let paramConfig = {};
		for (let [key, value] of params) if (key.startsWith("wp_") && (key = key.substring(3), key in defaultConfig && value)) {
			try {
				value = JSON.parse(value);
			} catch (_unused) {}
			paramConfig[key] = defaultConfig[key].constructor(value);
		}
		config = mergeConfig(config, paramConfig);
		let profile = config.profile;
		if (config.profiles && profile && config.profiles[profile] && (config = mergeConfig(config, config.profiles[profile]), logger.debug(`Profile set from config: ${profile}`)), config.profiles && browserId && config.profiles[`device.${browserId}`]) {
			let profile$1 = `device.${browserId}`;
			config = mergeConfig(config, config.profiles[profile$1]), logger.debug(`Profile set from device: ${profile$1}`);
		}
		if (config.profiles) {
			let userIds = [
				userId,
				null,
				userDisplayname
			];
			for (let i = 0; i < userIds.length; i++) {
				let user = userIds[i];
				if (user && (user = user.toLowerCase().replace(/\s/g, "_"), config.profiles[`user.${user}`])) {
					let profile$1 = `user.${user}`;
					config = mergeConfig(config, config.profiles[profile$1]), logger.debug(`Profile set from user: ${profile$1}`);
					break;
				}
			}
		}
		config = mergeConfig(config, paramConfig);
		let profile_entity = config.profile_entity;
		if (config.profiles && profile_entity && (elHass.hass || elHass.__hass).states[profile_entity] && config.profiles[(elHass.hass || elHass.__hass).states[profile_entity].state]) {
			let profile$1 = (elHass.hass || elHass.__hass).states[profile_entity].state;
			config = mergeConfig(config, config.profiles[profile$1]), logger.debug(`Profile set from entity state: ${profile$1}`);
		}
		config.content_interaction && (config.stop_screensaver_on_mouse_move = !1), config.image_url ? (config.image_url = config.image_url.replace(/^media-entity:\/\//, "media-entity-image://"), config.image_url.startsWith("/") && (config.image_url = `media-source://media_source${config.image_url}`), mediaSourceType() == "media-source" && (config.image_url = config.image_url.replace(/\/+$/, "")), mediaSourceType() == "unsplash-api" && config.media_list_update_interval < 90 && (config.media_list_update_interval = 90)) : config.show_images = !1, config.enabled || (config.debug = !1, config.hide_toolbar = !1, config.hide_sidebar = !1, config.hide_toolbar_action_icons = !1, config.fullscreen = !1, config.show_images = !1), (!oldConfig || !Object.keys(oldConfig).length) && (logger.logLevel = config.log_level_console), logger.debug("Wallpanel config is now:", config), wallpanel && (isActive() ? wallpanel.reconfigure(oldConfig) : wallpanel.screensaverRunning && wallpanel.screensaverRunning() && wallpanel.stopScreensaver());
	}
	function getActiveBrowserModPopup() {
		if (!browserId) return null;
		let bmp = document.getElementsByTagName("browser-mod-popup");
		return !bmp || !bmp[0] || !bmp[0].shadowRoot || bmp[0].shadowRoot.children.length == 0 ? null : bmp[0];
	}
	function isActive() {
		let params = new URLSearchParams(window.location.search);
		if (params.get("edit") == "1") return logger.debug("Edit mode active"), !1;
		if (!config.enabled) return logger.debug("Wallpanel not enabled in config"), !1;
		if (config.enabled_on_views && config.enabled_on_views.length > 0 && activeTab && !config.enabled_on_views.includes(activeTab)) return logger.debug(`Wallpanel not enabled on current tab ${activeTab}`), !1;
		if (config.disable_screensaver_when_assist_active) {
			let voiceCommandDialog = elHass.shadowRoot.querySelector("ha-voice-command-dialog");
			if (voiceCommandDialog && voiceCommandDialog.shadowRoot && voiceCommandDialog.shadowRoot.querySelector("ha-dialog")) return logger.debug("Assist is active, wallpanel disabled"), !1;
		}
		return wallpanel && wallpanel.disable_screensaver_on_browser_mod_popup_function && getActiveBrowserModPopup() && wallpanel.disable_screensaver_on_browser_mod_popup_function(getActiveBrowserModPopup()) ? (logger.debug("Browser mod popup function returned true, wallpanel disabled"), !1) : config.disable_screensaver_on_browser_mod_popup && getActiveBrowserModPopup() ? (logger.debug("Browser mod popup active, wallpanel disabled"), !1) : !0;
	}
	function mediaSourceType() {
		return !config.show_images || !config.image_url ? "" : config.image_url.startsWith("media-entity-video://") ? "media-entity-video" : config.image_url.startsWith("media-entity-image://") ? "media-entity-image" : config.image_url.startsWith("media-source://") ? "media-source" : config.image_url.startsWith("https://api.unsplash") ? "unsplash-api" : config.image_url.startsWith("immich+") ? "immich-api" : config.image_url.startsWith("iframe+") ? "iframe" : "url";
	}
	function getHaPanelLovelace() {
		try {
			return elHaMain.shadowRoot.querySelector("ha-panel-lovelace");
		} catch (err) {
			logger.error("Failed to get ha-panel-lovelace:", err);
		}
	}
	function getDashboardWallpanelConfig(keys = []) {
		let pl = getHaPanelLovelace(), conf = {};
		if (pl && pl.lovelace) {
			let wallpanelConfig;
			pl.lovelace.config && pl.lovelace.config.wallpanel ? wallpanelConfig = pl.lovelace.config.wallpanel : pl.lovelace.rawConfig && pl.lovelace.rawConfig.wallpanel && (wallpanelConfig = pl.lovelace.rawConfig.wallpanel), wallpanelConfig && (keys.length === 0 && (keys = Object.keys(wallpanelConfig)), keys.forEach((key) => {
				(key in defaultConfig || key in renamedConfigOptions) && (conf[key] = wallpanelConfig[key]);
			}));
		}
		return conf;
	}
	function setSidebarVisibility(hidden) {
		logger.debug(`setSidebarVisibility: hidden=${hidden}`);
		try {
			let panelLovelace = elHaMain.shadowRoot.querySelector("ha-panel-lovelace");
			if (panelLovelace) {
				let huiRoot = panelLovelace.shadowRoot.querySelector("hui-root");
				if (huiRoot) {
					let menuButton = huiRoot.shadowRoot.querySelector("ha-menu-button");
					menuButton && (hidden ? menuButton.style.display = "none" : menuButton.style.removeProperty("display"));
				}
			}
		} catch (e) {
			logger.warn(e);
		}
		try {
			let drawer = elHaMain.shadowRoot.querySelector("ha-drawer");
			if (drawer) {
				let sidebar = drawer.shadowRoot.querySelector("aside");
				sidebar && (hidden ? (sidebar.style.maxWidth = "0px", elHaMain.style.setProperty("--mdc-drawer-width", "env(safe-area-inset-left)")) : (sidebar.style.maxWidth = "", elHaMain.style.removeProperty("--mdc-drawer-width")), window.dispatchEvent(new Event("resize")));
			}
		} catch (e) {
			logger.warn(e);
		}
	}
	function setToolbarVisibility(hideToolbar, hideActionItems) {
		logger.debug(`setToolbarVisibility: hideToolbar=${hideToolbar}, hideActionItems=${hideActionItems}`);
		try {
			let panelLovelace = elHaMain.shadowRoot.querySelector("ha-panel-lovelace");
			if (!panelLovelace) return;
			let huiRoot = panelLovelace.shadowRoot.querySelector("hui-root");
			if (!huiRoot) return;
			huiRoot = huiRoot.shadowRoot;
			let view = huiRoot.querySelector("#view"), appToolbar = huiRoot.querySelector("app-toolbar");
			if (appToolbar || (appToolbar = huiRoot.querySelector("div.toolbar")), hideToolbar) appToolbar.style.setProperty("display", "none"), config.keep_toolbar_space || (view.style.minHeight = "100vh", view.style.marginTop = "0", view.style.paddingTop = "0");
			else {
				appToolbar.style.removeProperty("display"), view.style.removeProperty("min-height"), view.style.removeProperty("margin-top"), view.style.removeProperty("padding-top");
				let actionItems = appToolbar.querySelector("div.action-items");
				hideActionItems ? actionItems.style.setProperty("display", "none") : actionItems.style.setProperty("display", "flex");
			}
			window.dispatchEvent(new Event("resize"));
		} catch (e) {
			logger.warn(e);
		}
	}
	function navigate(path, keepSearch = !0) {
		keepSearch && !path.includes("?") && (path += window.location.search), history.pushState(null, "", path), elHass.dispatchEvent(new Event("location-changed", {
			bubbles: !0,
			cancelable: !1,
			composed: !0
		}));
	}
	document.addEventListener("fullscreenerror", () => {
		logger.error("Failed to enter fullscreen");
	}), document.addEventListener("fullscreenchange", () => {
		document.webkitCurrentFullScreenElement === void 0 ? document.fullscreenElement !== void 0 && (fullscreen = !!document.fullscreenElement) : fullscreen = !!document.webkitCurrentFullScreenElement;
	});
	function enterFullscreen() {
		logger.debug("Enter fullscreen");
		let el = document.documentElement;
		el.requestFullscreen ? el.requestFullscreen().then(() => {
			logger.debug("Successfully requested fullscreen");
		}, (error) => {
			logger.error("Failed to enter fullscreen:", error);
		}) : el.mozRequestFullScreen ? el.mozRequestFullScreen() : el.msRequestFullscreen ? el.msRequestFullscreen() : el.webkitRequestFullscreen && el.webkitRequestFullscreen();
	}
	function initWallpanel() {
		let HuiView = customElements.get("hui-view");
		if (!HuiView) throw Error("Failed to get hui-view from customElements");
		class WallpanelView extends HuiView {
			constructor() {
				super(), _defineProperty(this, "prefetchedMedia", {
					url: null,
					blob: null
				}), this.mediaList = [], this.mediaIndex = -1, this.mediaListDirection = "forwards", this.lastMediaListUpdate, this.updatingMediaList = !1, this.updatingMedia = !1, this.lastMediaUpdate = 0, this.blockEventsUntil = 0, this.screensaverStartedAt, this.screensaverStoppedAt = /* @__PURE__ */ new Date(), this.infoBoxContentCreatedDate, this.idleSince = Date.now(), this.lastProfileSet = config.profile, this.lastMove = null, this.lastCorner = 0, this.translateInterval = null, this.lastClickTime = 0, this.clickCount = 0, this.touchStartX = -1, this.currentWidth = 0, this.currentHeight = 0, this.energyCollectionUpdateEnabled = !1, this.energyCollectionUpdateInterval = 60, this.lastEnergyCollectionUpdate = 0, this.screensaverStopNavigationPathTimeout = null, this.disable_screensaver_on_browser_mod_popup_function = null, this.screenWakeLock = new ScreenWakeLock(), this.cameraMotionDetection = new CameraMotionDetection(), this.lovelace = null, this.__hass = elHass.hass || elHass.__hass, this.__cards = [], this.__badges = [], this.__views = [], elHass.provideHass(this), setInterval(this.timer.bind(this), 1e3);
			}
			set hass(hass) {
				logger.debug("Update hass"), this.__hass = hass;
				let changed = !1;
				for (let entityId in configEntityStates) {
					let entity = this.__hass.states[entityId];
					entity && entity.state != configEntityStates[entityId] && (configEntityStates[entityId] = entity.state, changed = !0);
				}
				let profileUpdated = this.updateProfile();
				if (!profileUpdated && changed && updateConfig(), !isActive()) return;
				let screensaver_entity = config.screensaver_entity;
				if (screensaver_entity && this.__hass.states[screensaver_entity]) {
					let lastChanged = new Date(this.__hass.states[screensaver_entity].last_changed), state = this.__hass.states[screensaver_entity].state;
					state == "off" && this.screensaverStartedAt && lastChanged.getTime() - this.screensaverStartedAt > 0 ? this.stopScreensaver(config.fade_out_time_screensaver_entity) : state == "on" && this.screensaverStoppedAt && lastChanged.getTime() - this.screensaverStoppedAt > 0 && this.startScreensaver();
				}
				this.screensaverRunning() && (this.__cards.forEach((card) => {
					card.hass = this.hass;
				}), this.__badges.forEach((badge) => {
					badge.hass = this.hass;
				}), this.__views.forEach((view) => {
					view.hass = this.hass;
				}), mediaSourceType() == "media-entity-image" && this.switchActiveMedia("entity_update"));
			}
			get hass() {
				return this.__hass;
			}
			setScreensaverEntityState() {
				let screensaver_entity = config.screensaver_entity;
				if (!screensaver_entity || !this.__hass.states[screensaver_entity] || this.screensaverRunning() && this.__hass.states[screensaver_entity].state == "on" || !this.screensaverRunning() && this.__hass.states[screensaver_entity].state == "off") return;
				let service = this.screensaverRunning() ? "turn_on" : "turn_off";
				logger.debug("Updating screensaver_entity", screensaver_entity, service), this.__hass.callService("input_boolean", service, { entity_id: screensaver_entity }).then((result) => {
					logger.debug(result);
				}, (error) => {
					logger.error("Failed to set screensaver entity state:", error);
				});
			}
			setImageURLEntityState() {
				let image_url_entity = config.image_url_entity;
				if (!image_url_entity || !this.__hass.states[image_url_entity]) return;
				let activeElement = this.getActiveMediaElement();
				if (!activeElement || !activeElement.mediaUrl) return;
				let mediaUrl = activeElement.mediaUrl.substring(0, 255);
				logger.debug("Updating image_url_entity", image_url_entity, mediaUrl), this.__hass.callService("input_text", "set_value", {
					entity_id: image_url_entity,
					value: mediaUrl
				}).then((result) => {
					logger.debug(result);
				}, (error) => {
					logger.error("Failed to set image url entity state:", error);
				});
			}
			updateProfile() {
				let profile_entity = config.profile_entity;
				if (profile_entity && this.__hass.states[profile_entity]) {
					let profile = this.__hass.states[profile_entity].state;
					if (profile && profile != this.lastProfileSet || !profile && this.lastProfileSet) return logger.debug(`Set profile to ${profile}`), this.lastProfileSet = profile, updateConfig(), !0;
				}
				return !1;
			}
			timer() {
				!config.enabled || !activePanel || (this.screensaverRunning() ? config.disable_screensaver_on_browser_mod_popup && getActiveBrowserModPopup() ? this.stopScreensaver(config.fade_out_time_browser_mod_popup) : this.updateScreensaver() : isActive() && config.idle_time > 0 && Date.now() - this.idleSince >= config.idle_time * 1e3 && this.startScreensaver());
			}
			setDefaultStyle() {
				this.messageContainer.removeAttribute("style"), this.messageContainer.style.position = "fixed", this.messageContainer.style.top = "1rem", this.messageContainer.style.left = "1rem", this.messageContainer.style.bottom = "1rem", this.messageContainer.style.right = "1rem", this.messageContainer.style.alignItems = "flex-end", this.messageContainer.style.display = "flex", this.messageContainer.style.flexDirection = "column", this.messageContainer.style.gap = "0.5rem", this.messageContainer.style.zIndex = this.style.zIndex + 1, this.messageContainer.style.pointerEvents = "none", this.messageContainer.style.visibility = "hidden", this.debugBox.removeAttribute("style"), this.debugBox.style.position = "fixed", this.debugBox.style.pointerEvents = "none", this.debugBox.style.top = "0%", this.debugBox.style.left = "0%", this.debugBox.style.width = "100%", this.debugBox.style.height = "100%", this.debugBox.style.background = "#00000099", this.debugBox.style.color = "#ffffff", this.debugBox.style.zIndex = this.style.zIndex + 2, this.debugBox.style.fontFamily = "monospace", this.debugBox.style.fontSize = "12px", this.debugBox.style.overflowWrap = "break-word", this.debugBox.style.overflowY = "auto", this.debugBox.style.visibility = "hidden", this.screensaverContainer.removeAttribute("style"), this.screensaverContainer.style.position = "fixed", this.screensaverContainer.style.pointerEvents = "auto", this.screensaverContainer.style.top = 0, this.screensaverContainer.style.left = 0, this.screensaverContainer.style.width = "100vw", this.screensaverContainer.style.height = "100vh", this.screensaverContainer.style.background = "#000000", this.screensaverContainer.style.overflow = "hidden", this.imageOneContainer.removeAttribute("style"), this.imageOneContainer.style.opacity = 0, this.imageOneContainer.style.position = "absolute", this.imageOneContainer.style.pointerEvents = "none", this.imageOneContainer.style.top = 0, this.imageOneContainer.style.left = 0, this.imageOneContainer.style.width = "100%", this.imageOneContainer.style.height = "100%", this.imageOneContainer.style.border = "none", this.imageOneBackground.style.position = "absolute", this.imageOneBackground.style.pointerEvents = "none", this.imageOneBackground.style.top = 0, this.imageOneBackground.style.left = 0, this.imageOneBackground.style.width = "100%", this.imageOneBackground.style.height = "100%", this.imageOneBackground.style.border = "none", this.imageOne.removeAttribute("style"), this.imageOne.style.position = "relative", this.imageOne.style.pointerEvents = "none", this.imageOne.style.width = "100%", this.imageOne.style.height = "100%", this.imageOne.style.border = "none", this.imageOneInfoContainer.removeAttribute("style"), this.imageOneInfoContainer.style.position = "absolute", this.imageOneInfoContainer.style.pointerEvents = "none", this.imageOneInfoContainer.style.top = 0, this.imageOneInfoContainer.style.left = 0, this.imageOneInfoContainer.style.width = "100%", this.imageOneInfoContainer.style.height = "100%", this.imageOneInfoContainer.style.border = "none", this.imageOneInfo.style.overflowY = "auto", this.imageTwoContainer.removeAttribute("style"), this.imageTwoContainer.style.opacity = 0, this.imageTwoContainer.style.position = "absolute", this.imageTwoContainer.style.pointerEvents = "none", this.imageTwoContainer.style.top = 0, this.imageTwoContainer.style.left = 0, this.imageTwoContainer.style.width = "100%", this.imageTwoContainer.style.height = "100%", this.imageTwoContainer.style.border = "none", this.imageTwoBackground.style.position = "absolute", this.imageTwoBackground.style.pointerEvents = "none", this.imageTwoBackground.style.top = 0, this.imageTwoBackground.style.left = 0, this.imageTwoBackground.style.width = "100%", this.imageTwoBackground.style.height = "100%", this.imageTwoBackground.style.border = "none", this.imageTwo.removeAttribute("style"), this.imageTwo.style.position = "relative", this.imageTwo.style.pointerEvents = "none", this.imageTwo.style.width = "100%", this.imageTwo.style.height = "100%", this.imageTwo.style.border = "none", this.imageTwoInfoContainer.removeAttribute("style"), this.imageTwoInfoContainer.style.position = "absolute", this.imageTwoInfoContainer.style.pointerEvents = "none", this.imageTwoInfoContainer.style.top = 0, this.imageTwoInfoContainer.style.left = 0, this.imageTwoInfoContainer.style.width = "100%", this.imageTwoInfoContainer.style.height = "100%", this.imageTwoInfoContainer.style.border = "none", this.imageTwoInfo.style.overflowY = "auto", this.screensaverImageOverlay.removeAttribute("style"), this.screensaverImageOverlay.style.position = "absolute", this.screensaverImageOverlay.style.top = 0, this.screensaverImageOverlay.style.left = 0, this.screensaverImageOverlay.style.width = "100%", this.screensaverImageOverlay.style.height = "100%", this.screensaverImageOverlay.style.background = "#00000000", this.infoContainer.removeAttribute("style"), this.infoContainer.style.position = "absolute", this.infoContainer.style.pointerEvents = "none", this.infoContainer.style.top = 0, this.infoContainer.style.left = 0, this.infoContainer.style.width = "100%", this.infoContainer.style.height = "100%", this.infoContainer.style.transition = "opacity 2000ms ease-in-out", this.infoContainer.style.padding = "25px", this.infoContainer.style.boxSizing = "border-box", this.infoBox.removeAttribute("style"), this.infoBox.style.pointerEvents = "none", this.infoBox.style.width = "fit-content", this.infoBox.style.maxHeight = "100%", this.infoBox.style.borderRadius = "10px", this.infoBox.style.overflowY = "auto", this.infoBox.style.scrollbarWidth = "none", this.infoBox.style.setProperty("--wp-card-width", "500px"), this.infoBox.style.setProperty("--wp-card-padding", "0"), this.infoBox.style.setProperty("--wp-card-margin", "5px"), this.infoBox.style.setProperty("--wp-card-backdrop-filter", "none"), this.infoBox.style.setProperty("--wp-badges-minwidth", "200px"), this.infoBoxPosX.style.pointerEvents = "none", this.infoBoxPosX.style.height = "100%", this.infoBoxPosX.style.width = "100%", this.infoBoxPosY.style.pointerEvents = "none", this.infoBoxPosY.style.height = "100%", this.infoBoxPosY.style.width = "100%", this.infoBoxContent.style.pointerEvents = "none", this.infoBoxContent.style.width = "fit-content", this.infoBoxContent.style.height = "100%", this.infoBoxContent.style.display = "grid", this.fixedInfoContainer.removeAttribute("style"), this.fixedInfoContainer.style.position = "fixed", this.fixedInfoContainer.style.pointerEvents = "none", this.fixedInfoContainer.style.top = 0, this.fixedInfoContainer.style.left = 0, this.fixedInfoContainer.style.width = "100%", this.fixedInfoContainer.style.height = "100%", this.fixedInfoBox.style.pointerEvents = "none", this.fixedInfoBox.style.cssText = this.infoBox.style.cssText, this.screensaverOverlay.removeAttribute("style"), this.screensaverOverlay.style.position = "absolute", this.screensaverOverlay.style.pointerEvents = "none", this.screensaverOverlay.style.top = 0, this.screensaverOverlay.style.left = 0, this.screensaverOverlay.style.width = "100%", this.screensaverOverlay.style.height = "100%", this.screensaverOverlay.style.background = "#00000000";
			}
			updateStyle() {
				if (this.screensaverOverlay.style.background = "#00000000", this.debugBox.style.visibility = config.debug ? "visible" : "hidden", this.debugBox.style.pointerEvents = config.debug ? "auto" : "none", this.style.transition = `opacity ${Math.round(config.fade_in_time * 1e3)}ms ease-in-out`, this.imageOneContainer.style.transition = `opacity ${Math.round(config.crossfade_time * 1e3)}ms ease-in-out`, this.imageTwoContainer.style.transition = `opacity ${Math.round(config.crossfade_time * 1e3)}ms ease-in-out`, this.messageContainer.style.visibility = this.screensaverRunning() ? "visible" : "hidden", config.content_interaction && (this.screensaverImageOverlay.style.pointerEvents = "none"), config.info_animation_duration_x ? this.infoBoxPosX.style.animation = `moveX ${config.info_animation_duration_x}s ${config.info_animation_timing_function_x} infinite alternate` : this.infoBoxPosX.style.animation = "", config.info_animation_duration_y ? this.infoBoxPosY.style.animation = `moveY ${config.info_animation_duration_y}s ${config.info_animation_timing_function_y} infinite alternate` : this.infoBoxPosY.style.animation = "", config.style) {
					for (let elId in config.style) if (elId.startsWith("wallpanel-") && elId != "wallpanel-shadow-host" && elId != "wallpanel-screensaver-info-box-badges" && elId != "wallpanel-screensaver-info-box-views" && !classStyles[elId]) {
						let el = this.shadowRoot.getElementById(elId);
						if (el) {
							for (let attr in logger.debug(`Setting style attributes for element #${elId}`), config.style[elId]) logger.debug(`Setting style attribute ${attr} to ${config.style[elId][attr]}`), el.style.setProperty(attr, config.style[elId][attr]);
							el == this.infoBox ? this.fixedInfoBox.style.cssText = this.infoBox.style.cssText : el == this.infoBoxContent && (this.fixedInfoBoxContent.style.cssText = this.infoBoxContent.style.cssText);
						} else logger.error(`Element #${elId} not found`);
					}
				}
			}
			updateShadowStyle() {
				let computed = getComputedStyle(this.infoContainer), maxX = this.infoContainer.offsetWidth - parseInt(computed.paddingLeft) - parseInt(computed.paddingRight) - this.infoBox.offsetWidth, maxY = this.infoContainer.offsetHeight - parseInt(computed.paddingTop) - parseInt(computed.paddingBottom) - this.infoBox.offsetHeight, host = "";
				if (config.style) {
					if (config.style["wallpanel-shadow-host"]) for (let attr in config.style["wallpanel-shadow-host"]) host += `${attr}: ${config.style["wallpanel-shadow-host"][attr]};\n`;
					for (let className in classStyles) config.style[className] && mergeConfig(classStyles[className], config.style[className]);
				}
				let classCss = "";
				for (let className in classStyles) {
					for (let attr in classCss += `.${className} {\n`, classStyles[className]) classCss += `${attr}: ${classStyles[className][attr]};\n`;
					classCss += "}\n";
				}
				this.shadowStyle.innerHTML = `
				:host {
					${host}
				}
				@keyframes moveX {
					100% {
						transform: translate3d(${maxX}px, 0, 0);
					}
				}
				@keyframes moveY {
					100% {
						transform: translate3d(0, ${maxY}px, 0);
					}
				}
				@keyframes horizontalProgress {
					0% {
						width: 0%;
					}
					100% {
						width: 100%;
					}
				}
				@keyframes kenBurnsEffect-experimental {
					0% {
						transform: scale(1.0) translateX(calc(var(--hidden-width) / -2 * 1px)) translateY(calc(var(--hidden-height) / -2 * 1px));
					}
					50% {
						transform: scale(var(--ken-burns-zoom));
					}
					90% {
						transform: scale(calc(1.0 + ((var(--ken-burns-zoom) - 1.0)/2))) translateX(calc(var(--hidden-width) / 2 * 1px)) translateY(calc(var(--hidden-height) / 2 * 1px));
					}
					100% {
						transform: scale(1.0);
					}
				}
				@keyframes kenBurnsEffect-experimental2 {
					0% {
						transform: scale(1.0);
					}
					25% {
						transform: scale(calc(1.0 + ((var(--ken-burns-zoom) - 1.0)/2))) translateX(calc(var(--hidden-width) / 2 * 1px)) translateY(calc(var(--hidden-height) / 2 * 1px));
					}
					50% {
						transform: scale(var(--ken-burns-zoom));
					}
					75% {
						transform: scale(calc(1.0 + ((var(--ken-burns-zoom) - 1.0)/2))) translateX(calc(var(--hidden-width) / -2 * 1px)) translateY(calc(var(--hidden-height) / -2 * 1px));
					}
					100% {
						transform: scale(1.0);
					}
				}
				@keyframes kenBurnsEffect-simple {
					0% {
						transform-origin: bottom left;
						transform: scale(1.0);
					}
					100% {
						transform: scale(var(--ken-burns-zoom));
					}
				}
				${classCss}
				${config.custom_css}
			`;
			}
			randomMove() {
				let computed = getComputedStyle(this.infoContainer), maxX = this.infoContainer.offsetWidth - parseInt(computed.paddingLeft) - parseInt(computed.paddingRight) - this.infoBox.offsetWidth, maxY = this.infoContainer.offsetHeight - parseInt(computed.paddingTop) - parseInt(computed.paddingBottom) - this.infoBox.offsetHeight, x = Math.floor(Math.random() * maxX), y = Math.floor(Math.random() * maxY);
				this.moveInfoBox(x, y);
			}
			moveAroundCorners(correctPostion = !1) {
				let fadeDuration = null;
				correctPostion ? fadeDuration = 0 : this.lastCorner = (this.lastCorner + 1) % 4;
				let computed = getComputedStyle(this.infoContainer), x = [2, 3].includes(this.lastCorner) ? this.infoContainer.offsetWidth - parseInt(computed.paddingLeft) - parseInt(computed.paddingRight) - this.infoBox.offsetWidth : 0, y = [1, 2].includes(this.lastCorner) ? this.infoContainer.offsetHeight - parseInt(computed.paddingTop) - parseInt(computed.paddingBottom) - this.infoBox.offsetHeight : 0;
				this.moveInfoBox(x, y, fadeDuration);
			}
			moveInfoBox(x, y, fadeDuration = null) {
				if (this.lastMove = Date.now(), fadeDuration === null && (fadeDuration = config.info_move_fade_duration), fadeDuration > 0) if (this.infoBox.animate) {
					let keyframes = [
						{ opacity: 1 },
						{
							opacity: 0,
							offset: .5
						},
						{ opacity: 1 }
					];
					this.infoBox.animate(keyframes, {
						duration: Math.round(fadeDuration * 1e3),
						iterations: 1
					});
				} else logger.warn("This browser does not support the animate() method, please set info_move_fade_duration to 0");
				let wp = this, ms = Math.round(fadeDuration * 500);
				ms < 0 && (ms = 0), wp.translateInterval && clearInterval(wp.translateInterval), wp.translateInterval = setInterval(function() {
					wp.infoBoxPosX.style.transform = `translate3d(${x}px, 0, 0)`, wp.infoBoxPosY.style.transform = `translate3d(0, ${y}px, 0)`;
				}, ms);
			}
			createInfoBoxContent() {
				logger.debug("Creating info box content");
				let haPanelLovelace = getHaPanelLovelace();
				if (haPanelLovelace) {
					if (this.lovelace = haPanelLovelace.lovelace || haPanelLovelace.__lovelace, this.infoBoxContentCreatedDate = /* @__PURE__ */ new Date(), this.infoBoxContent.innerHTML = "", this.__badges = [], this.__cards = [], this.__views = [], this.energyCollectionUpdateEnabled = !1, this.shadowRoot.querySelectorAll(".wp-card").forEach((card) => {
						card.parentElement.removeChild(card);
					}), config.badges && config.badges.length > 0) {
						let div = document.createElement("div");
						if (div.id = "wallpanel-screensaver-info-box-badges", div.classList.add("wp-badges"), div.style.padding = "var(--wp-card-padding)", div.style.margin = "var(--wp-card-margin)", div.style.textAlign = "center", div.style.display = "flex", div.style.alignItems = "flex-start", div.style.flexWrap = "wrap", div.style.justifyContent = "center", div.style.gap = "8px", div.style.margin = "0px", div.style.minWidth = "var(--wp-badges-minwidth)", config.style[div.id]) for (let attr in config.style[div.id]) logger.debug(`Setting style attribute ${attr} to ${config.style[div.id][attr]}`), div.style.setProperty(attr, config.style[div.id][attr]);
						config.badges.forEach((badge) => {
							let badgeConfig = JSON.parse(JSON.stringify(badge));
							logger.debug("Creating badge:", badgeConfig);
							let style = {};
							badgeConfig.wp_style && (style = badgeConfig.wp_style, delete badgeConfig.wp_style);
							let createBadgeElement = this._createBadgeElement ? this._createBadgeElement : this.createBadgeElement, badgeElement = createBadgeElement.bind(this)(badgeConfig);
							for (let attr in badgeElement.hass = this.hass, style) badgeElement.style.setProperty(attr, style[attr]);
							this.__badges.push(badgeElement), div.append(badgeElement);
						}), this.infoBoxContent.appendChild(div);
					}
					if (config.views && config.views.length > 0) {
						let div = document.createElement("div");
						if (div.id = "wallpanel-screensaver-info-box-views", div.classList.add("wp-views"), config.style[div.id]) for (let attr in config.style[div.id]) logger.debug(`Setting style attribute ${attr} to ${config.style[div.id][attr]}`), div.style.setProperty(attr, config.style[div.id][attr]);
						let viewConfigs = this.lovelace.config.views;
						config.views.forEach((view) => {
							let viewIndex = -1, viewConfig = JSON.parse(JSON.stringify(view));
							for (var i = 0; i < viewConfigs.length; i++) if (viewConfigs[i].path && view.path && viewConfigs[i].path.toLowerCase() == view.path.toLowerCase() || viewConfigs[i].title && view.title && viewConfigs[i].title.toLowerCase() == view.title.toLowerCase()) {
								viewIndex = i, viewConfig.title = viewConfigs[i].title, viewConfig.path = viewConfigs[i].path;
								break;
							}
							viewIndex == -1 && (logger.error(`View with path '${viewConfig.path}' / tile '${viewConfig.title}' not found`), viewIndex = 0);
							let viewElement = document.createElement("hui-view");
							viewElement.route = {
								prefix: "/" + activePanel,
								path: "/" + view.path
							}, viewElement.lovelace = this.lovelace, viewElement.panel = this.hass.panels[activePanel], viewElement.hass = this.hass, viewElement.index = viewIndex, typeof viewConfig.narrow == "boolean" && (viewElement.narrow = viewConfig.narrow), this.__views.push(viewElement);
							let viewContainer = document.createElement("div");
							if (config.content_interaction ? viewElement.style.pointerEvents = "auto" : viewElement.style.pointerEvents = "none", viewConfig.wp_style) for (let attr in viewConfig.wp_style) viewContainer.style.setProperty(attr, viewConfig.wp_style[attr]);
							viewContainer.append(viewElement), div.append(viewContainer);
						}), this.infoBoxContent.appendChild(div);
					}
					config.cards && config.cards.length > 0 && config.cards.forEach((card) => {
						let cardConfig = JSON.parse(JSON.stringify(card));
						logger.debug("Creating card:", cardConfig);
						let style = {};
						cardConfig.wp_style && (style = cardConfig.wp_style, delete cardConfig.wp_style), cardConfig.type && cardConfig.type.includes("energy") && (cardConfig.collection_key = "energy_wallpanel", this.energyCollectionUpdateEnabled = !0);
						let createCardElement = this._createCardElement ? this._createCardElement : this.createCardElement, cardElement = createCardElement.bind(this)(cardConfig);
						cardElement.hass = this.hass, this.__cards.push(cardElement);
						let parent = this.infoBoxContent, cardContainer = document.createElement("div");
						for (let attr in cardContainer.classList.add("wp-card"), cardContainer.style.width = "var(--wp-card-width)", cardContainer.style.padding = "var(--wp-card-padding)", cardContainer.style.margin = "var(--wp-card-margin)", cardContainer.style.backdropFilter = "var(--wp-card-backdrop-filter)", config.content_interaction ? cardContainer.style.pointerEvents = "auto" : cardContainer.style.pointerEvents = "none", style) if (attr == "parent") {
							let pel = this.shadowRoot.getElementById(style[attr]);
							pel && (parent = pel);
						} else cardContainer.style.setProperty(attr, style[attr]);
						cardContainer.append(cardElement), parent.appendChild(cardContainer);
					}), setTimeout(this.updateShadowStyle.bind(this), 500);
				}
			}
			restartProgressBarAnimation() {
				if (!this.progressBarContainer || (this.progressBar.style.animation = "none", !config.show_progress_bar)) return;
				let wp = this;
				setTimeout(function() {
					wp.progressBar.style.animation = `horizontalProgress ${config.display_time}s linear`;
				}, 25);
			}
			restartKenBurnsEffect() {
				if (!config.image_animation_ken_burns || !config.image_animation_ken_burns_animations.length) return;
				let activeElement = this.getActiveMediaElement();
				activeElement.style.animation = "none", activeElement.style.setProperty("--ken-burns-zoom", config.image_animation_ken_burns_zoom);
				let delay = Math.floor(config.image_animation_ken_burns_delay * 1e3);
				delay < 50 && (delay = 50);
				let duration = Math.ceil(config.image_animation_ken_burns_duration || (config.display_time + config.crossfade_time * 2) * 1.2), animation = config.image_animation_ken_burns_animations[Math.floor(Math.random() * config.image_animation_ken_burns_animations.length)];
				this.kenburnsDelayStartTimer && clearTimeout(this.kenburnsDelayStartTimer), activeElement.animationIterationCount = 1, this.kenburnsDelayStartTimer = setTimeout(function() {
					activeElement.style.animation = `kenBurnsEffect-${animation} ${duration}s linear forwards`;
				}, delay);
			}
			getMediaElement(active = !0, mediaElement = !1) {
				let elem = this.imageOneContainer.style.opacity == (active ? 1 : 0) ? this.imageOne : this.imageTwo;
				if (mediaElement && elem.tagName.toLowerCase() == "ha-camera-stream") {
					let video = getHaCameraStreamPlayerAndVideo(elem)[1];
					video && (elem = video);
				}
				return elem;
			}
			getActiveMediaElement(mediaElement = !1) {
				return this.getMediaElement(!0, mediaElement);
			}
			getInactiveMediaElement(mediaElement = !1) {
				return this.getMediaElement(!1, mediaElement);
			}
			replaceMediaElement(mediaElement, mediaType) {
				if (typeof mediaElement.src == "string" && mediaElement.src.startsWith("blob:") && URL.revokeObjectURL(mediaElement.src), typeof mediaElement.pause == "function" && mediaElement.pause(), mediaElement.tagName.toLowerCase() == "ha-camera-stream") {
					let video = getHaCameraStreamPlayerAndVideo(mediaElement)[1];
					video && video.pause();
				}
				mediaType = mediaType.toLowerCase();
				let newMediaElement = document.createElement(mediaType);
				return [...mediaElement.attributes].filter((attr) => attr.name != "src").forEach((attr) => newMediaElement.setAttribute(attr.name, attr.value)), newMediaElement.mediaUrl = mediaElement.mediaUrl, newMediaElement.infoCacheUrl = mediaElement.infoCacheUrl, mediaType === "video" && Object.assign(newMediaElement, {
					preload: "auto",
					muted: !1,
					volume: config.video_volume
				}), mediaElement.replaceWith(newMediaElement), mediaElement === this.imageOne ? this.imageOne = newMediaElement : this.imageTwo = newMediaElement, mediaElement.remove(), newMediaElement;
			}
			loadBackgroundImage(element) {
				let srcMediaUrl = element.src, tagName = element.tagName.toLowerCase();
				if (tagName === "ha-camera-stream") {
					let mediaElement = getHaCameraStreamPlayerAndVideo(element)[1];
					if (!mediaElement || !mediaElement.poster) return;
					srcMediaUrl = mediaElement.poster;
				} else if (tagName === "video") {
					let canvas = document.createElement("canvas");
					canvas.width = element.videoWidth, canvas.height = element.videoHeight;
					let ctx = canvas.getContext("2d");
					ctx.drawImage(element, 0, 0, canvas.width, canvas.height);
					try {
						srcMediaUrl = canvas.toDataURL("image/png");
					} catch (err) {
						srcMediaUrl = null, logger.error("Error extracting canvas image:", err);
					}
				}
				let cont = this.imageOneBackground;
				element == this.imageTwo && (cont = this.imageTwoBackground), cont.style.backgroundImage = srcMediaUrl ? `url(${srcMediaUrl})` : "";
			}
			connectedCallback() {
				this.style.zIndex = config.z_index, this.style.visibility = "hidden", this.style.opacity = 0, this.style.position = "fixed", this.messageContainer = document.createElement("div"), this.messageContainer.id = "wallpanel-message-container", this.debugBox = document.createElement("div"), this.debugBox.id = "wallpanel-debug-box", this.screensaverContainer = document.createElement("div"), this.screensaverContainer.id = "wallpanel-screensaver-container", this.imageOneContainer = document.createElement("div"), this.imageOneContainer.id = "wallpanel-screensaver-image-one-container", this.imageOneBackground = document.createElement("div"), this.imageOneBackground.className = "wallpanel-screensaver-image-background", this.imageOneBackground.id = "wallpanel-screensaver-image-one-background", this.imageOne = document.createElement("img"), this.imageOne.id = "wallpanel-screensaver-image-one", this.imageOneInfoContainer = document.createElement("div"), this.imageOneInfoContainer.className = "wallpanel-screensaver-image-info-container", this.imageOneInfoContainer.id = "wallpanel-screensaver-image-one-info-container", this.imageOneInfo = document.createElement("div"), this.imageOneInfo.className = "wallpanel-screensaver-image-info", this.imageOneInfo.id = "wallpanel-screensaver-image-one-info", this.imageOneInfoContainer.appendChild(this.imageOneInfo), this.imageOneContainer.appendChild(this.imageOneBackground), this.imageOneContainer.appendChild(this.imageOne), this.imageOneContainer.appendChild(this.imageOneInfoContainer), this.screensaverContainer.appendChild(this.imageOneContainer), this.imageTwoContainer = document.createElement("div"), this.imageTwoContainer.id = "wallpanel-screensaver-image-two-container", this.imageTwoBackground = document.createElement("div"), this.imageTwoBackground.className = "wallpanel-screensaver-image-background", this.imageTwoBackground.id = "wallpanel-screensaver-image-two-background", this.imageTwo = document.createElement("img"), this.imageTwo.id = "wallpanel-screensaver-image-two", this.imageTwoInfoContainer = document.createElement("div"), this.imageTwoInfoContainer.className = "wallpanel-screensaver-image-info-container", this.imageTwoInfoContainer.id = "wallpanel-screensaver-image-two-info-container", this.imageTwoInfo = document.createElement("div"), this.imageTwoInfo.className = "wallpanel-screensaver-image-info", this.imageTwoInfo.id = "wallpanel-screensaver-image-two-info", this.imageTwoInfoContainer.appendChild(this.imageTwoInfo), this.imageTwoContainer.appendChild(this.imageTwoBackground), this.imageTwoContainer.appendChild(this.imageTwo), this.imageTwoContainer.appendChild(this.imageTwoInfoContainer), this.screensaverContainer.appendChild(this.imageTwoContainer), this.screensaverImageOverlay = document.createElement("div"), this.screensaverImageOverlay.id = "wallpanel-screensaver-image-overlay", this.screensaverContainer.appendChild(this.screensaverImageOverlay), this.progressBarContainer = document.createElement("div"), this.progressBarContainer.className = "wallpanel-progress", this.progressBar = document.createElement("div"), this.progressBar.className = "wallpanel-progress-inner", this.progressBar.id = "wallpanel-progress-inner", this.progressBarContainer.appendChild(this.progressBar), config.show_progress_bar && this.screensaverContainer.appendChild(this.progressBarContainer), this.infoContainer = document.createElement("div"), this.infoContainer.id = "wallpanel-screensaver-info-container", this.fixedInfoContainer = document.createElement("div"), this.fixedInfoContainer.id = "wallpanel-screensaver-fixed-info-container", this.fixedInfoBox = document.createElement("div"), this.fixedInfoBox.id = "wallpanel-screensaver-fixed-info-box", this.fixedInfoBoxContent = document.createElement("div"), this.fixedInfoBoxContent.id = "wallpanel-screensaver-fixed-info-box-content", this.screensaverContainer.appendChild(this.infoContainer), this.infoBoxPosX = document.createElement("div"), this.infoBoxPosX.id = "wallpanel-screensaver-info-box-pos-x", this.infoBoxPosX.x = "0", this.infoBoxPosY = document.createElement("div"), this.infoBoxPosY.id = "wallpanel-screensaver-info-box-pos-y", this.infoBoxPosX.y = "0", this.infoBox = document.createElement("div"), this.infoBox.id = "wallpanel-screensaver-info-box", this.infoBoxContent = document.createElement("div"), this.infoBoxContent.id = "wallpanel-screensaver-info-box-content", this.infoBoxContent.style.display = "grid", this.infoBox.appendChild(this.infoBoxContent), this.infoBoxPosX.appendChild(this.infoBox), this.infoBoxPosY.appendChild(this.infoBoxPosX), this.infoContainer.appendChild(this.infoBoxPosY), this.fixedInfoBox.appendChild(this.fixedInfoBoxContent), this.fixedInfoContainer.appendChild(this.fixedInfoBox), this.infoContainer.appendChild(this.fixedInfoContainer), this.screensaverOverlay = document.createElement("div"), this.screensaverOverlay.id = "wallpanel-screensaver-overlay", this.screensaverContainer.appendChild(this.screensaverOverlay), this.shadowStyle = document.createElement("style");
				let shadow = this.attachShadow({ mode: "open" });
				shadow.appendChild(this.shadowStyle), shadow.appendChild(this.screensaverContainer), shadow.appendChild(this.messageContainer), shadow.appendChild(this.debugBox);
				let wp = this, eventNames = [
					"click",
					"touchstart",
					"touchend",
					"wheel"
				];
				config.stop_screensaver_on_key_down && eventNames.push("keydown"), config.stop_screensaver_on_mouse_move && eventNames.push("mousemove"), eventNames.forEach(function(eventName) {
					window.addEventListener(eventName, (event) => {
						wp.handleInteractionEvent(event);
					}, { capture: !0 });
				});
				let screensaverResizeObserver = new ResizeObserver(() => this.updateCurrentSize());
				screensaverResizeObserver.observe(this.screensaverContainer), window.addEventListener("hass-more-info", () => {
					wp.screensaverRunning() && wp.moreInfoDialogToForeground();
				});
				let infoBoxResizeObserver = new ResizeObserver(() => {
					config.info_move_pattern === "corners" && this.moveAroundCorners(!0);
				});
				infoBoxResizeObserver.observe(this.infoBoxContent), this.setScreensaverEntityState();
			}
			updateCurrentSize(force = !1) {
				if (!this.screensaverRunning() && !force) return;
				let width = this.screensaverContainer.clientWidth, height = this.screensaverContainer.clientHeight;
				(this.currentWidth != width || this.currentHeight != height || force) && (logger.debug(`Size changed from ${this.currentWidth}x${this.currentHeight} to ${width}x${height}`), this.currentWidth = width, this.currentHeight = height, this.updateShadowStyle(), this.setMediaDimensions());
			}
			reconfigure(oldConfig) {
				let oldConfigAvailable = oldConfig && Object.keys(oldConfig).length > 0;
				if (this.updateStyle(), this.screensaverRunning() && this.createInfoBoxContent(), !config.info_move_interval && oldConfigAvailable && oldConfig.info_move_interval && wallpanel.moveInfoBox(0, 0), config.show_images && (!this.mediaList || !this.mediaList.length || !oldConfigAvailable || !oldConfig.show_images || oldConfig.image_url != config.image_url)) {
					let wp = this, switchMedia = this.screensaverRunning() && oldConfigAvailable, imgUrlChanged = oldConfig.image_url != config.image_url;
					imgUrlChanged && (this.mediaList = [], this.mediaIndex = -1), this.updateMediaList(function() {
						switchMedia && wp.switchActiveMedia("reconfigure");
					}, imgUrlChanged);
				}
				config.disable_screensaver_on_browser_mod_popup_func && (this.disable_screensaver_on_browser_mod_popup_function = Function("bmp", config.disable_screensaver_on_browser_mod_popup_func)), isActive() && config.camera_motion_detection_enabled ? this.cameraMotionDetection.start() : this.cameraMotionDetection.stop();
			}
			getMoreInfoDialog() {
				let moreInfoDialog = elHass.shadowRoot.querySelector("ha-more-info-dialog");
				if (!moreInfoDialog) return;
				let dialog = moreInfoDialog.shadowRoot.querySelector("ha-dialog");
				if (dialog) return dialog;
			}
			moreInfoDialogToForeground() {
				let wp = this;
				function showDialog(attempt = 1) {
					let dialog = wp.getMoreInfoDialog();
					if (dialog) {
						dialog.style.position = "absolute", dialog.style.zIndex = wp.style.zIndex + 1;
						return;
					}
					attempt < 10 && setTimeout(showDialog, 50, attempt + 1);
				}
				showDialog();
			}
			fetchEXIFInfo(img) {
				let wp = this;
				if (mediaInfoCache.get(img.infoCacheUrl)) return;
				let tmpImg = document.createElement("img");
				tmpImg.src = img.src, tmpImg.mediaUrl = img.mediaUrl, tmpImg.infoCacheUrl = img.infoCacheUrl, getImageData(tmpImg, function() {
					logger.debug("EXIF data:", tmpImg.exifdata), addToMediaInfoCache(tmpImg.infoCacheUrl, tmpImg.exifdata), wp.setMediaDataInfo(tmpImg);
					let exifLong = tmpImg.exifdata.GPSLongitude, exifLat = tmpImg.exifdata.GPSLatitude;
					if (config.fetch_address_data && exifLong && !isNaN(exifLong[0]) && exifLat && !isNaN(exifLat[0])) {
						let m = tmpImg.exifdata.GPSLatitudeRef == "S" ? -1 : 1, latitude = exifLat[0] * m + (exifLat[1] * m * 60 + exifLat[2] * m) / 3600;
						m = tmpImg.exifdata.GPSLongitudeRef == "W" ? -1 : 1;
						let longitude = exifLong[0] * m + (exifLong[1] * m * 60 + exifLong[2] * m) / 3600;
						logger.debug(`Fetching nominatim data for lat=${latitude} lon=${longitude}`);
						let xhr = new XMLHttpRequest();
						xhr.onload = function() {
							if (this.status == 200 || this.status === 0) {
								let info = JSON.parse(xhr.responseText);
								if (logger.debug("nominatim data:", info), info && info.address) {
									let mediaInfo = mediaInfoCache.get(tmpImg.infoCacheUrl);
									mediaInfo ? (mediaInfo.address = info.address, wp.setMediaDataInfo(tmpImg)) : logger.warn("URL not in cache:", tmpImg.infoCacheUrl);
								}
							} else logger.error("nominatim error:", this.status, xhr.status, xhr.responseText);
						}, xhr.onerror = function(event) {
							logger.error("nominatim error:", event);
						}, xhr.ontimeout = function(event) {
							logger.error("nominatim timeout:", event);
						}, xhr.open("GET", `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`), xhr.timeout = 15e3, xhr.send();
					}
				});
			}
			setMediaDataInfo(mediaElement = null) {
				mediaElement || (mediaElement = this.getActiveMediaElement());
				let infoCacheUrl = mediaElement.infoCacheUrl, mediaUrl = mediaElement.mediaUrl;
				if (!infoCacheUrl) {
					logger.debug("infoCacheUrl missing:", mediaElement);
					return;
				}
				if (!mediaUrl) {
					logger.debug("mediaUrl missing:", mediaElement);
					return;
				}
				mediaUrl = decodeURI(mediaUrl);
				let infoElements = [];
				if (this.imageOne.infoCacheUrl == infoCacheUrl && infoElements.push(this.imageOneInfo), this.imageTwo.infoCacheUrl == infoCacheUrl && infoElements.push(this.imageTwoInfo), infoElements.length == 0) return;
				if (!config.show_image_info || !config.image_info_template) {
					infoElements.forEach((infoElement) => {
						infoElement.innerHTML = "", infoElement.style.display = "none";
					});
					return;
				}
				let mediaInfo = mediaInfoCache.get(infoCacheUrl);
				mediaInfo || (mediaInfo = {}), mediaInfo.image || (mediaInfo.image = {}), mediaInfo.image.url === void 0 && (mediaInfo.image.url = mediaUrl);
				let mediaUrlWithoutQuery = mediaUrl.replace(/\?[^?]*$/, "").replace(/\/+$/, "");
				if (mediaInfo.image.path === void 0 && (mediaInfo.image.path = mediaUrlWithoutQuery.replace(/^[^:]+:\/\/[^/]+/, "")), mediaInfo.image.relativePath === void 0 && (mediaInfo.image.relativePath = mediaUrlWithoutQuery.replace(config.image_url, "").replace(/^\/+/, "")), mediaInfo.image.filename === void 0 && (mediaInfo.image.filename = mediaUrlWithoutQuery.replace(/^.*[\\/]/, "")), mediaInfo.image.folderName === void 0) {
					mediaInfo.image.folderName = "";
					let parts = mediaUrlWithoutQuery.split("/");
					parts.length >= 2 && (mediaInfo.image.folderName = parts[parts.length - 2]);
				}
				logger.debug("Media info:", mediaInfo);
				let html = config.image_info_template;
				if (html == "analyze") {
					html = "";
					function iterateOverKeys(obj, prefix = "") {
						let keys = Object.keys(obj);
						keys.sort(), keys.forEach((key) => {
							let value = obj[key];
							typeof value == "object" && value ? iterateOverKeys(value, key + ".") : html += `${prefix}${key}: ${stringify(value)}<br>`;
						});
					}
					iterateOverKeys(mediaInfo), this.imageOneInfo.style.pointerEvents = "none", this.imageTwoInfo.style.pointerEvents = "none", infoElements.forEach((infoElement) => {
						infoElement.style.pointerEvents = "auto";
					});
				} else html = html.replace(RegExp("\\${([^}]+)}", "g"), (match, tags) => {
					let prefix = "", suffix = "", options = null;
					if (tags.includes("!")) {
						let tmp = tags.split("!");
						tags = tmp[0];
						for (let i = 1; i < tmp.length; i++) {
							let argType = tmp[i].substring(0, tmp[i].indexOf("=")), argValue = tmp[i].substring(tmp[i].indexOf("=") + 1);
							argType == "prefix" ? prefix = argValue : argType == "suffix" ? suffix = argValue : argType == "options" && (options = {}, argValue.split(",").forEach((optVal) => {
								let tmp2 = optVal.split(":", 2);
								tmp2[0] && tmp2[1] && (options[tmp2[0].replace(/\s/g, "")] = tmp2[1].replace(/\s/g, ""));
							}));
						}
					}
					let val = "", tagList = tags.split("|"), tag = "";
					for (let i = 0; i < tagList.length; i++) {
						tag = tagList[i];
						let keys = tag.replace(/\s/g, "").split(".");
						if (val = mediaInfo, keys.forEach((key) => {
							val && (val = val[key]);
						}), val) break;
					}
					if (!val) return "";
					if (/DateTime/i.test(tag)) {
						let date = new Date(val.replace(RegExp("(\\d\\d\\d\\d):(\\d\\d):(\\d\\d) (\\d\\d):(\\d\\d):(\\d\\d)", ""), "$1-$2-$3T$4:$5:$6"));
						if (isNaN(date)) return "";
						options || (options = {
							year: "numeric",
							month: "2-digit",
							day: "2-digit"
						}), val = date.toLocaleDateString((elHass.hass || elHass.__hass).locale.language, options);
					}
					return typeof val == "object" && (val = JSON.stringify(val)), prefix + val + suffix;
				});
				infoElements.forEach((infoElement) => {
					infoElement.innerHTML = html, infoElement.style.display = "block";
				});
			}
			updateMediaList(callback = null, force = !1, retryCount = 0) {
				var _this = this;
				return _asyncToGenerator(function* () {
					if (!config.image_url || !force && (/* @__PURE__ */ new Date()).getTime() - _this.lastMediaListUpdate < config.media_list_update_interval * 1e3) return;
					let wp = _this, updateFunction = null, sourceType = mediaSourceType();
					if (sourceType == "unsplash-api") updateFunction = wp.updateMediaListFromUnsplashAPI;
					else if (sourceType == "immich-api") updateFunction = wp.updateMediaListFromImmichAPI;
					else if (sourceType == "media-source") updateFunction = wp.updateMediaListFromMediaSource;
					else {
						let url = config.image_url;
						sourceType == "iframe" && (url = url.replace(/^iframe\+/, "")), _this.mediaList = [url], callback && callback();
						return;
					}
					_this.updatingMediaList = !0, _this.lastMediaListUpdate = Date.now();
					try {
						yield updateFunction.bind(wp)(), logger.debug(`Media list from ${sourceType} is now:`, wp.mediaList), callback && callback();
					} catch (error) {
						let retryDelay = 3e3;
						if (logger.warn(`Failed to update media list from ${sourceType}:`, error), retryCount < 3) logger.warn(`Retrying media list update in ${retryDelay / 1e3} seconds (attempt ${retryCount + 1}/3)...`), setTimeout(() => wp.updateMediaList(callback, !0, retryCount + 1), retryDelay);
						else {
							let errorMsg = `Failed to update media list from ${config.image_url} after 3 retries: ${error.message || stringify(error)}`;
							logger.error(errorMsg);
						}
					}
					_this.updatingMediaList = !1;
				})();
			}
			findMedias(mediaContentId) {
				var _this2 = this;
				return _asyncToGenerator(function* () {
					let wp = _this2;
					logger.debug(`findMedias: ${mediaContentId}`);
					let excludeRegExp = [];
					if (config.exclude_filenames) for (let imageExclude of config.exclude_filenames) excludeRegExp.push(new RegExp(imageExclude));
					try {
						let mediaEntry = yield wp.hass.callWS({
							type: "media_source/browse_media",
							media_content_id: mediaContentId
						});
						logger.debug("Found media entry", mediaEntry);
						let promises = mediaEntry.children.map(function() {
							var _ref = _asyncToGenerator(function* (child) {
								let filename = child.media_content_id.replace(/^media-source:\/\/[^/]+/, "");
								for (let exclude of excludeRegExp) if (exclude.test(filename)) return null;
								return ["image", "video"].includes(child.media_class) ? config.exclude_media_types && config.exclude_media_types.includes(child.media_class) ? null : child.media_content_id : child.media_class == "directory" ? yield wp.findMedias(child.media_content_id) : null;
							});
							return function(_x) {
								return _ref.apply(this, arguments);
							};
						}()), results = yield Promise.all(promises);
						return results.flat().filter((res) => res !== null);
					} catch (error) {
						throw logger.warn(`Error browsing media ${mediaContentId}:`, error), error;
					}
				})();
			}
			updateMediaListFromMediaSource() {
				var _this3 = this;
				return _asyncToGenerator(function* () {
					let mediaContentId = config.image_url, wp = _this3;
					try {
						let urls = yield wp.findMedias(mediaContentId);
						urls = config.media_order == "random" ? shuffleArray(urls) : urls.sort(), urls.length > config.media_list_max_size && (logger.info(`Using only ${config.media_list_max_size} of ${urls.length} media items`), urls = urls.slice(0, config.media_list_max_size)), wp.mediaList = urls;
					} catch (error) {
						throw Error(`Failed to update image list from ${config.image_url}: ${error.message || stringify(error)}`);
					}
				})();
			}
			updateMediaListFromUnsplashAPI() {
				var _this4 = this;
				return _asyncToGenerator(function* () {
					let urls = [], requestUrl = `${config.image_url}&count=30`;
					logger.debug(`Unsplash API request: ${requestUrl}`);
					try {
						let options = {
							method: "GET",
							headers: { Accept: "application/json" }
						};
						typeof AbortSignal < "u" && (logger.debug("Using AbortSignal"), options.signal = AbortSignal.timeout(1e4));
						let response = yield fetch(requestUrl, options);
						if (!response.ok) {
							let errorText = yield response.text();
							throw Error(`Unsplash API request failed: ${response.status} ${response.statusText} - ${errorText}`);
						}
						let json = yield response.json();
						logger.debug("Got Unsplash API response"), json.forEach((entry) => {
							logger.debug(entry);
							let url = `${entry.urls.raw}&w=\${width}&h=\${height}&auto=format`;
							urls.push(url), addToMediaInfoCache(url, entry);
						}), _this4.mediaList = urls;
					} catch (error) {
						throw error.name === "AbortError" ? Error(`Unsplash API request timed out: ${requestUrl}`) : error;
					}
				})();
			}
			_immichFetch(_x2) {
				return _asyncToGenerator(function* (url, options = {}) {
					let defaultOptions = { headers: {
						"x-api-key": config.immich_api_key,
						"Content-Type": "application/json",
						Accept: "application/json"
					} }, mergedOptions = _objectSpread2(_objectSpread2({}, defaultOptions), options);
					mergedOptions.headers = _objectSpread2(_objectSpread2({}, defaultOptions.headers), options.headers), typeof AbortSignal < "u" && (logger.debug("Using AbortSignal"), mergedOptions.signal = AbortSignal.timeout(1e4)), logger.debug(`Immich API request: ${url}`);
					try {
						let response = yield fetch(url, mergedOptions);
						if (!response.ok) {
							let errorText = yield response.text();
							throw Error(`Immich API request failed: ${response.status} ${response.statusText} - ${errorText}`);
						}
						return yield response.json();
					} catch (error) {
						throw error.name === "AbortError" ? Error(`Immich API request timed out: ${url}`) : error;
					}
				}).apply(this, arguments);
			}
			updateMediaListFromImmichAPI() {
				var _this5 = this;
				return _asyncToGenerator(function* () {
					if (!config.immich_api_key) throw Error("immich_api_key not configured");
					let wp = _this5, screenOrientation = _this5.currentWidth >= _this5.currentHeight ? "landscape" : "portrait", exclude_media_orientation = config.exclude_media_orientation;
					exclude_media_orientation == "auto" && (exclude_media_orientation = screenOrientation == "landscape" ? "portrait" : "landscape"), logger.debug(`config.exclude_media_orientation=${config.exclude_media_orientation}, screenOrientation=${screenOrientation}, exclude_media_orientation=${exclude_media_orientation}`);
					let urls = [], mediaInfo = {}, apiUrl = config.image_url.replace(/^immich\+/, ""), excludeRegExp = [];
					if (config.exclude_filenames) for (let imageExclude of config.exclude_filenames) excludeRegExp.push(new RegExp(imageExclude));
					function processAssets(assets, folderName = null) {
						assets.forEach((asset) => {
							logger.debug("Processing immich asset", asset);
							let assetType = asset.type.toLowerCase();
							if (!["image", "video"].includes(assetType)) {
								logger.debug("Neither image nor video, skipping");
								return;
							}
							if (config.exclude_media_types && config.exclude_media_types.includes(assetType)) {
								logger.debug(`Media type "${assetType}" excluded`);
								return;
							}
							for (let exclude of excludeRegExp) if (exclude.test(asset.originalFileName)) {
								logger.debug(`Media item excluded by regex "${exclude}"`);
								return;
							}
							if (exclude_media_orientation && asset.exifInfo && asset.exifInfo.exifImageWidth && asset.exifInfo.exifImageHeight) {
								let orientation = asset.exifInfo.exifImageWidth >= asset.exifInfo.exifImageHeight ? "landscape" : "portrait";
								if (asset.exifInfo.orientation && [
									5,
									6,
									7,
									8
								].includes(parseInt(asset.exifInfo.orientation)) && (orientation = orientation == "landscape" ? "portrait" : "landscape"), orientation === exclude_media_orientation) {
									logger.debug(`Media item with orientation "${orientation}" excluded`);
									return;
								}
							}
							let resolution = "original";
							config.immich_resolution == "preview" && (resolution = assetType == "video" ? "video/playback" : "thumbnail?size=preview");
							let url = `${apiUrl}/assets/${asset.id}/${resolution}`, info = asset.exifInfo || {};
							info.mediaType = assetType, info.image = {
								filename: asset.originalFileName,
								folderName
							}, mediaInfo[url] = info, urls.push(url);
						});
					}
					function finalizeImageList() {
						urls.length == 0 && logger.error("No matching media assets found"), urls = config.media_order == "random" ? shuffleArray(urls) : urls.sort(), urls.length > config.media_list_max_size && (logger.info(`Using only ${config.media_list_max_size} of ${urls.length} media items`), urls = urls.slice(0, config.media_list_max_size)), urls.forEach((url) => {
							addToMediaInfoCache(url, mediaInfo[url]);
						}), wp.mediaList = urls;
					}
					try {
						if (config.immich_persons && config.immich_persons.length) {
							let orPersonNames = config.immich_persons.map((entry) => (Array.isArray(entry) ? entry : [entry]).map((v) => v.toLowerCase())), personNameToId = {}, allPeople = [], page = 1, hasNextPage = !0;
							for (; hasNextPage;) {
								let peopleData = yield wp._immichFetch(`${apiUrl}/people?size=1000&page=${page}`);
								allPeople = allPeople.concat(peopleData.people), hasNextPage = peopleData.hasNextPage, page++;
							}
							allPeople.forEach((person) => {
								personNameToId[person.name.toLowerCase()] = person.id;
							});
							for (let personNames of orPersonNames) {
								let personIds = personNames.map((name$1) => personNameToId[name$1]).filter((id) => (id || logger.error(`Person not found in immich: ${name}`), !!id));
								if (personIds.length > 0) {
									logger.debug("Searching asset metadata for persons: ", personIds);
									let page$1 = 1;
									for (;;) {
										logger.debug(`Fetching asset metadata page ${page$1}`);
										let searchResults = yield wp._immichFetch(`${apiUrl}/search/metadata`, {
											method: "POST",
											body: JSON.stringify({
												personIds,
												withExif: !0,
												page: page$1,
												size: 1e3
											})
										});
										if (logger.debug("Got immich API response", searchResults), !searchResults.assets.count) {
											if (page$1 == 1) {
												let msg = `No media items found in immich that contain all these people: ${personNames}`;
												logger.error(msg);
											}
											break;
										}
										if (processAssets(searchResults.assets.items), !searchResults.assets.nextPage) break;
										page$1 = searchResults.assets.nextPage;
									}
								}
							}
						} else if (config.immich_memories) {
							logger.debug("Fetching immich memories (on_this_day)");
							let allMemories = yield wp._immichFetch(`${apiUrl}/memories?type=on_this_day`);
							logger.debug("Got immich API response", allMemories);
							let now = /* @__PURE__ */ new Date();
							allMemories.filter((memory) => {
								let showAt = new Date(memory.showAt), hideAt = new Date(memory.hideAt);
								return now >= showAt && now <= hideAt;
							}).forEach((memory) => {
								logger.debug("Processing memory:", memory), processAssets(memory.assets);
							});
						} else if (config.immich_tag_names && config.immich_tag_names.length) {
							let tagNamesLower = config.immich_tag_names.map((v) => v.toLowerCase());
							logger.debug("Fetching immich tags");
							let allTags = yield wp._immichFetch(`${apiUrl}/tags`);
							logger.debug("Got immich API response", allTags);
							let tagIds = allTags.filter((tag) => {
								let include = tagNamesLower.includes(tag.name.toLowerCase());
								return logger.debug(`${include ? "Adding" : "Skipping"} tag: ${tag.name}`), include;
							}).map((tag) => tag.id);
							if (tagIds.length > 0) {
								logger.debug("Searching asset metadata for tags: ", tagIds);
								let page = 1;
								for (;;) {
									logger.debug(`Fetching asset metadata page ${page}`);
									let searchResults = yield wp._immichFetch(`${apiUrl}/search/metadata`, {
										method: "POST",
										body: JSON.stringify({
											tagIds,
											withExif: !0,
											page,
											size: 1e3
										})
									});
									if (logger.debug("Got immich API response", searchResults), !searchResults.assets.count) {
										if (page == 1) {
											let msg = `No media items found in immich that contain these tags: ${tagNamesLower}`;
											logger.error(msg);
										}
										break;
									}
									if (processAssets(searchResults.assets.items), !searchResults.assets.nextPage) break;
									page = searchResults.assets.nextPage;
								}
							} else logger.error("No matching immich tags found or selected.");
						} else {
							let albumNamesLower = (config.immich_album_names || []).map((v) => v.toLowerCase());
							logger.debug(`Fetching immich albums (shared=${config.immich_shared_albums})`);
							let allAlbums = yield wp._immichFetch(`${apiUrl}/albums?shared=${config.immich_shared_albums}`);
							logger.debug("Got immich API response", allAlbums);
							let albumIdsToFetch = allAlbums.filter((album) => {
								let include = !albumNamesLower.length || albumNamesLower.includes(album.albumName.toLowerCase());
								return logger.debug(`${include ? "Adding" : "Skipping"} album: ${album.albumName}`), include;
							}).map((album) => album.id);
							if (albumIdsToFetch.length > 0) {
								let albumDetailPromises = albumIdsToFetch.map((albumId) => (logger.debug("Fetching album metadata: ", albumId), wp._immichFetch(`${apiUrl}/albums/${albumId}`))), albumDetailsList = yield Promise.all(albumDetailPromises);
								albumDetailsList.forEach((albumDetails) => {
									logger.debug("Got immich album details", albumDetails), processAssets(albumDetails.assets, albumDetails.albumName);
								});
							} else logger.error("No matching immich albums found or selected.");
						}
						finalizeImageList();
					} catch (error) {
						throw logger.error("Immich API processing failed:", error), error;
					}
				})();
			}
			fillPlaceholders(url) {
				let width = this.currentWidth, height = this.currentHeight, timestamp_ms = Date.now(), timestamp = Math.floor(timestamp_ms / 1e3);
				return url = url.replace(/\${width}/g, width), url = url.replace(/\${height}/g, height), url = url.replace(/\${timestamp_ms}/g, timestamp_ms), url = url.replace(/\${timestamp}/g, timestamp), url;
			}
			updateMediaFromUrl(element, url, mediaType = null, headers = null, useFetch = !1) {
				var _this6 = this;
				return _asyncToGenerator(function* () {
					let loadMediaWithElement = function() {
						var _ref2 = _asyncToGenerator(function* (elem) {
							let tagName = elem.tagName.toLowerCase(), loadEventName = {
								img: "load",
								video: "loadeddata",
								iframe: "load"
							}[tagName];
							if (!loadEventName) throw Error(`Unsupported element tag "${elem.tagName}"`);
							let promise = new Promise((resolve, reject) => {
								let cleanup = () => {
									elem.onerror = null, elem.removeEventListener(loadEventName, onLoad);
								}, onLoad = () => {
									cleanup(), resolve();
								}, onError = () => {
									cleanup(), reject(/* @__PURE__ */ Error(`Failed to load ${elem.tagName} "${url}"`));
								};
								elem.addEventListener(loadEventName, onLoad), elem.onerror = onError;
							});
							if (useFetch) {
								let blob;
								if (_this6.prefetchedMedia.url == url && _this6.prefetchedMedia.blob) blob = _this6.prefetchedMedia.blob;
								else {
									headers = headers || {};
									let response = yield fetch(url, { headers });
									if (logger.debug("Got respone", response), !response.ok) throw Error(`Failed to load ${elem.tagName} "${url}": ${response}`);
									blob = yield response.blob();
								}
								typeof elem.src == "string" && elem.src.startsWith("blob:") && URL.revokeObjectURL(elem.src), elem.src = window.URL.createObjectURL(blob);
							} else elem.src = url;
							return promise;
						});
						return function(_x3) {
							return _ref2.apply(this, arguments);
						};
					}(), handleFallback = function() {
						var _ref3 = _asyncToGenerator(function* (currentElem, mediaType$1 = null, originalError = null) {
							mediaType$1 || (mediaType$1 = currentElem.tagName.toLowerCase() === "img" ? "video" : "img");
							let fallbackElem = _this6.replaceMediaElement(currentElem, mediaType$1);
							try {
								return yield loadMediaWithElement(fallbackElem), fallbackElem;
							} catch (e) {
								throw originalError || e;
							}
						});
						return function(_x4) {
							return _ref3.apply(this, arguments);
						};
					}(), loadOrFallback = function() {
						var _ref4 = _asyncToGenerator(function* (currentElem, withFallback) {
							try {
								return yield loadMediaWithElement(currentElem), currentElem;
							} catch (e) {
								if (withFallback) return yield handleFallback(currentElem, null, e);
								throw e;
							}
						});
						return function(_x5, _x6) {
							return _ref4.apply(this, arguments);
						};
					}();
					return mediaType ? mediaType === element.tagName.toLowerCase() ? yield loadOrFallback(element, !1) : yield handleFallback(element, mediaType) : yield loadOrFallback(element, !0);
				})();
			}
			getNextMediaURL(updateIndex = !0) {
				if (!this.mediaList.length) return null;
				let mediaIndex = this.mediaIndex;
				return this.mediaListDirection == "forwards" ? mediaIndex++ : mediaIndex--, mediaIndex >= this.mediaList.length ? mediaIndex = 0 : mediaIndex < 0 && (mediaIndex = this.mediaList.length - 1), updateIndex && (this.mediaIndex = mediaIndex), this.mediaList[mediaIndex];
			}
			updateMediaFromMediaSource(element) {
				var _this7 = this;
				return _asyncToGenerator(function* () {
					var _result$mime_type;
					let result = yield _this7.hass.callWS({
						type: "media_source/resolve_media",
						media_content_id: element.mediaUrl
					}), matchedType = (_result$mime_type = result.mime_type) == null ? void 0 : _result$mime_type.match(RegExp("^(image|video)\\/", "")), mediaType = {
						image: "img",
						video: "video"
					}[matchedType == null ? void 0 : matchedType[1]] || null, src = result.url;
					return !src.startsWith("http://") && !src.startsWith("https://") && (src = `${document.location.origin}${src}`), logger.debug(`Setting image src: ${src}`), element.mediaUrl = src, yield _this7.updateMediaFromUrl(element, element.mediaUrl, mediaType);
				})();
			}
			updateMediaFromImmichAPI(element) {
				var _this8 = this;
				return _asyncToGenerator(function* () {
					let mediaInfo = mediaInfoCache.get(element.mediaUrl) || {}, mediaType = mediaInfo.mediaType == "video" ? "video" : "img", headers = { "x-api-key": config.immich_api_key }, result = yield _this8.updateMediaFromUrl(element, element.mediaUrl, mediaType, headers, !0);
					return _this8.prefetchedMedia.url = null, _this8.prefetchedMedia.blob = null, setTimeout(_asyncToGenerator(function* () {
						let nextUrl = _this8.getNextMediaURL(!1);
						if (!nextUrl || _this8.prefetchedMedia.url) return;
						_this8.prefetchedMedia.url = nextUrl, logger.debug("Prefetching next media"), yield _this8.defer();
						let response = yield fetch(nextUrl, { headers });
						if (!response.ok) {
							logger.error("Failed to prefetch next media", response);
							return;
						}
						let blob = yield response.blob();
						_this8.prefetchedMedia.url == nextUrl && (_this8.prefetchedMedia.blob = blob);
					}), config.display_time * 1e3 / 2), result;
				})();
			}
			updateMediaFromMediaEntity(element) {
				var _this9 = this;
				return _asyncToGenerator(function* () {
					let match = element.mediaUrl.match(RegExp("^media-entity-(image|video):\\/\\/(.*)", ""));
					if (!match) throw Error(`Invalid URL "${element.mediaUrl}"`);
					let mediaType = match[1], mediaEntity = match[2], entity = _this9.hass.states[mediaEntity];
					if (!entity) throw Error(`Entity "${mediaEntity}" not available`);
					mediaEntityState = entity.state;
					function attributesToMediaInfoCache() {
						"media_exif" in entity.attributes ? addToMediaInfoCache(element.infoCacheUrl, entity.attributes.media_exif) : addToMediaInfoCache(element.infoCacheUrl, entity.attributes);
					}
					if (mediaType == "video") return element.infoCacheUrl = element.mediaUrl, attributesToMediaInfoCache(), element = _this9.replaceMediaElement(element, "ha-camera-stream"), element.style.visibility = "hidden", Object.assign(element, {
						hass: _this9.__hass,
						stateObj: _this9.__hass.states[mediaEntity],
						"allow-exoplayer": !1,
						controls: !1
					}), new Promise((resolve) => {
						function onLoad(_x7) {
							return _onLoad.apply(this, arguments);
						}
						function _onLoad() {
							return _onLoad = _asyncToGenerator(function* (evt) {
								let el = evt.currentTarget;
								el.removeEventListener("load", onLoad), yield el.updateComplete;
								let [player, video] = getHaCameraStreamPlayerAndVideo(el);
								if (player.style.height = "100%", video.autoplay = !1, video.muted = !1, video.volume = config.video_volume, video.style.maxHeight = "100%", video.style.height = "100%", video.readyState >= element.HAVE_ENOUGH_DATA) resolve(el);
								else {
									let onCanPlay = () => {
										video.removeEventListener("canplay", onCanPlay), resolve(el);
									};
									video.addEventListener("canplay", onCanPlay);
								}
							}), _onLoad.apply(this, arguments);
						}
						element.addEventListener("load", onLoad);
					});
					{
						if (!entity.attributes || !entity.attributes.entity_picture) throw Error(`Entity "${mediaEntity}" has no entity_picture attribute`);
						let entityPicture = entity.attributes.entity_picture, querySuffix = entityPicture.indexOf("?") > 0 ? "&" : "?";
						return querySuffix += _this9.fillPlaceholders("width=${width}&height=${height}&ts=${timestamp_ms}"), element.mediaUrl = entityPicture + querySuffix, element.infoCacheUrl = element.mediaUrl, attributesToMediaInfoCache(), yield _this9.updateMediaFromUrl(element, element.mediaUrl, "img", null, !0);
					}
				})();
			}
			updateMediaFromUnsplashAPI(element) {
				var _this10 = this;
				return _asyncToGenerator(function* () {
					let mediaInfo = mediaInfoCache.get(element.mediaUrl);
					return element.mediaUrl = _this10.fillPlaceholders(element.mediaUrl), mediaInfo && addToMediaInfoCache(element.mediaUrl, mediaInfo), yield _this10.updateMediaFromUrl(element, element.mediaUrl, "img");
				})();
			}
			updateMediaFromMediaIframe(element) {
				var _this11 = this;
				return _asyncToGenerator(function* () {
					return yield _this11.updateMediaFromUrl(element, element.mediaUrl, "iframe");
				})();
			}
			updateMediaFromOtherSrc(element) {
				var _this12 = this;
				return _asyncToGenerator(function* () {
					return element.mediaUrl = _this12.fillPlaceholders(element.mediaUrl), yield _this12.updateMediaFromUrl(element, element.mediaUrl);
				})();
			}
			updateMedia(element) {
				var _this13 = this;
				return _asyncToGenerator(function* () {
					if (config.show_images) {
						_this13.updatingMedia = !0;
						try {
							if (element == _this13.getActiveMediaElement()) {
								let inactiveElement = _this13.getInactiveMediaElement();
								if (inactiveElement.tagName.toLowerCase() === "video") try {
									inactiveElement.pause();
								} catch (e) {
									logger.debug(e);
								}
							}
							if (element.mediaUrl = _this13.getNextMediaURL(), !element.mediaUrl) return;
							if (element.infoCacheUrl = element.mediaUrl, element = mediaSourceType() == "media-source" ? yield _this13.updateMediaFromMediaSource(element) : mediaSourceType() == "unsplash-api" ? yield _this13.updateMediaFromUnsplashAPI(element) : mediaSourceType() == "immich-api" ? yield _this13.updateMediaFromImmichAPI(element) : mediaSourceType().startsWith("media-entity") ? yield _this13.updateMediaFromMediaEntity(element) : mediaSourceType() == "iframe" ? yield _this13.updateMediaFromMediaIframe(element) : yield _this13.updateMediaFromOtherSrc(element), element) {
								element.style.visibility = "visible";
								let isVideo = element.tagName.toLowerCase() === "video";
								isVideo && (yield new Promise((resolve, reject) => {
									if (element.readyState >= element.HAVE_ENOUGH_DATA) resolve();
									else {
										let onCanPlay = () => {
											element.removeEventListener("canplay", onCanPlay), element.removeEventListener("error", onError), resolve();
										}, onError = () => {
											element.removeEventListener("canplay", onCanPlay), element.removeEventListener("error", onError), reject(/* @__PURE__ */ Error("Video failed to load"));
										};
										element.addEventListener("canplay", onCanPlay), element.addEventListener("error", onError);
									}
								})), config.image_background === "image" && _this13.loadBackgroundImage(element), !isVideo && config.show_image_info && /.*\.jpe?g$/i.test(element.mediaUrl.split("?")[0].replace(/\/*$/, "")) && _this13.fetchEXIFInfo(element);
							}
						} catch (error) {
							logger.error(`Failed to update media from ${element.mediaUrl}:`, error);
						}
						return _this13.updatingMedia = !1, element;
					}
				})();
			}
			setMediaDimensions() {
				let activeElem = this.getActiveMediaElement(), mediaElem = this.getActiveMediaElement(!0);
				if (logger.debug("Setting dimensions for media element", activeElem), !activeElem.mediaUrl) return;
				let tagName = mediaElem.tagName.toLowerCase(), width = 0, height = 0;
				tagName === "video" ? (width = mediaElem.videoWidth, height = mediaElem.videoHeight) : tagName === "img" && (width = mediaElem.naturalWidth, height = mediaElem.naturalHeight);
				let mediaFit = !width || !height || width >= height ? config.image_fit_landscape : config.image_fit_portrait;
				activeElem.style.position = "absolute", activeElem.style.left = "0px", activeElem.style.top = "0px", activeElem.style.objectFit = mediaFit;
				let availWidth = this.currentWidth, availHeight = this.currentHeight, setHeight = availHeight, setWidth = availWidth, hiddenHeight = 0, hiddenWidth = 0, setTop = 0, setLeft = 0;
				if (logger.debug(`Available size is ${availWidth}x${availHeight}, media size is ${width}x${height}`), width && height) {
					let ratioWidth = availWidth / width, ratioHeight = availHeight / height, diffWidth = availWidth - width * ratioHeight, diffHeight = availHeight - height * ratioWidth;
					logger.debug(`Diff is ${diffWidth}x${diffHeight}`), mediaFit == "contain" && diffWidth < diffHeight || mediaFit == "cover" && diffWidth >= diffHeight ? (logger.debug("Using available width"), setWidth = availWidth, setHeight = Math.floor(height * ratioWidth), setTop = Math.floor((setHeight - availHeight) / -2), hiddenHeight = Math.max(setHeight - availHeight, 0)) : (logger.debug("Using available height"), setHeight = availHeight, setWidth = Math.floor(width * ratioHeight), setLeft = Math.floor((setWidth - availWidth) / -2), hiddenWidth = Math.max(setWidth - availWidth, 0));
				} else tagName !== "iframe" && logger.warn("Size not available for media element", mediaElem);
				logger.debug(`Setting dimensions: size=${setWidth}x${setHeight} - position=${setLeft}x${setTop} - hidden=${hiddenWidth}x${hiddenHeight}`), activeElem.style.width = `${setWidth}px`, activeElem.style.height = `${setHeight}px`, activeElem.style.top = `${setTop}px`, activeElem.style.left = `${setLeft}px`, activeElem.style.setProperty("--hidden-width", hiddenWidth), activeElem.style.setProperty("--hidden-height", hiddenHeight);
			}
			startPlayingActiveMedia() {
				let activeElem = this.getActiveMediaElement(), videoElement = this.getActiveMediaElement(!0);
				if (typeof videoElement.play != "function") return;
				let cleanupListeners = () => {
					videoElement._wp_video_playback_listeners && (Object.entries(videoElement._wp_video_playback_listeners).forEach(([event, handler]) => {
						videoElement.removeEventListener(event, handler);
					}), videoElement._wp_video_playback_listeners = null);
				};
				if (videoElement.loop = config.video_loop, !config.video_loop && !videoElement._wp_video_playback_listeners) {
					let onTimeUpdate = () => {
						if (this.getActiveMediaElement() !== videoElement) {
							cleanupListeners();
							return;
						}
						if (videoElement.currentTime > config.crossfade_time) {
							let remainingTime = videoElement.duration - videoElement.currentTime;
							remainingTime <= config.crossfade_time && (this.switchActiveMedia("display_time_elapsed"), cleanupListeners());
						}
					}, onMediaEnded = () => {
						this.getActiveMediaElement() === videoElement && this.switchActiveMedia("media_end"), cleanupListeners();
					}, onMediaPause = () => {
						cleanupListeners();
					};
					videoElement._wp_video_playback_listeners = {
						timeupdate: onTimeUpdate,
						ended: onMediaEnded,
						pause: onMediaPause
					}, Object.entries(videoElement._wp_video_playback_listeners).forEach(([event, handler]) => {
						videoElement.addEventListener(event, handler);
					});
				}
				videoElement.play().catch((e) => {
					cleanupListeners(), activeElem === this.getActiveMediaElement() && logger.error(`Failed to play media "${activeElem.mediaUrl}" (src=${videoElement.src}):`, e);
				});
			}
			defer() {
				return new Promise((resolve) => {
					window.requestIdleCallback ? window.requestIdleCallback(resolve, { timeout: 200 }) : setTimeout(resolve, 10);
				});
			}
			switchActiveMedia(eventType) {
				var _this14 = this;
				return _asyncToGenerator(function* () {
					_this14.afterFadeoutTimer && clearTimeout(_this14.afterFadeoutTimer);
					let sourceType = mediaSourceType();
					if (sourceType.startsWith("media-entity")) {
						let mediaEntity = config.image_url.replace(RegExp("^media-entity-(image|video):\\/\\/", ""), ""), entity = _this14.hass.states[mediaEntity];
						if (!entity) {
							logger.error(`Media entity "${mediaEntity}" not available`);
							return;
						}
						if (mediaEntityState != entity.state) logger.debug(`Media entity ${mediaEntity} state has changed`);
						else if (eventType == "entity_update") return;
						else if (eventType == "start" || eventType == "user_action") logger.debug(`Media entity ${mediaEntity} state unchanged, but eventType = ${eventType}`);
						else if (config.media_entity_load_unchanged) logger.debug(`Media entity ${mediaEntity} state unchanged, but media_entity_load_unchanged = true`);
						else {
							_this14.lastMediaUpdate = Date.now(), _this14.restartProgressBarAnimation();
							return;
						}
						mediaEntityState = entity.state;
					}
					_this14.lastMediaUpdate = Date.now();
					let activeElement = _this14.getActiveMediaElement();
					if (sourceType === "iframe" && !config.iframe_load_unchanged && _this14.getNextMediaURL(!1) == activeElement.mediaUrl) return;
					let crossfadeMillis = eventType == "user_action" ? 250 : Math.round(config.crossfade_time * 1e3);
					eventType == "start" && (crossfadeMillis = 0);
					let updateElement = _this14.getInactiveMediaElement(), element = yield _this14.updateMedia(updateElement);
					element && (yield _this14.defer(), _this14._switchActiveMedia(element, crossfadeMillis));
				})();
			}
			_switchActiveMedia(newElement, crossfadeMillis = null) {
				this.lastMediaUpdate = Date.now(), this.imageOneContainer.style.transition = `opacity ${crossfadeMillis}ms ease-in-out`, this.imageTwoContainer.style.transition = `opacity ${crossfadeMillis}ms ease-in-out`;
				let curActiveContainer = this.imageOneContainer, newActiveContainer = this.imageTwoContainer, curMedia = this.imageOne, newMedia = this.imageTwo;
				newElement == this.imageOne && (curActiveContainer = this.imageTwoContainer, newActiveContainer = this.imageOneContainer, curMedia = this.imageTwo, newMedia = this.imageOne), logger.debug(`Switching active media to '${newActiveContainer.id}'`), newActiveContainer.style.opacity != 1 && (newActiveContainer.style.opacity = 1), curActiveContainer.style.opacity != 0 && (curActiveContainer.style.opacity = 0), newMedia.tagName.toLowerCase() == "iframe" && config.iframe_interaction ? newMedia.style.pointerEvents = "auto" : newMedia.style.pointerEvents = "none", this.setMediaDimensions(), this.startPlayingActiveMedia(), this.restartProgressBarAnimation(), this.restartKenBurnsEffect(), this.defer().then(() => this.setMediaDataInfo()), this.defer().then(() => this.setImageURLEntityState()), curMedia.tagName.toLowerCase() === "video" && (this.afterFadeoutTimer = setTimeout(function() {
					if (curMedia.tagName.toLowerCase() === "video") try {
						curMedia.pause();
					} catch (e) {
						logger.debug(e);
					}
				}, crossfadeMillis));
			}
			showMessage(type, title, text, timeout = 5e3) {
				if (!this.messageContainer) return;
				let message = document.createElement("div");
				message.className = `wallpanel-message ${type}`;
				let titleDiv = document.createElement("div");
				titleDiv.className = "wallpanel-message-title", titleDiv.innerHTML = title, message.appendChild(titleDiv);
				let textDiv = document.createElement("div");
				textDiv.className = "wallpanel-message-text", textDiv.innerHTML = text, message.appendChild(textDiv), this.messageContainer.appendChild(message), requestAnimationFrame(() => message.classList.add("show"));
				let wp = this;
				setTimeout(() => wp.hideMessage(message), timeout);
			}
			hideMessage(message) {
				message.classList.remove("show"), message.addEventListener("transitionend", () => message.remove());
			}
			hideAllMessages() {
				let messages = this.messageContainer.querySelectorAll(".wallpanel-message");
				if (!messages.length) return !1;
				let wp = this;
				return messages.forEach((message) => wp.hideMessage(message)), !0;
			}
			setupScreensaver() {
				logger.debug("Setup screensaver"), config.keep_screen_on_time > 0 && !this.screenWakeLock.enabled && this.screenWakeLock.enable(), config.fullscreen && !fullscreen && enterFullscreen();
			}
			startScreensaver() {
				var _this15 = this;
				return _asyncToGenerator(function* () {
					if (logger.debug("Start screensaver"), _this15.screensaverStartedAt = Date.now(), _this15.screensaverStoppedAt = null, _this15.updateCurrentSize(!0), _this15.setDefaultStyle(), updateConfig(), !isActive()) {
						logger.debug("Wallpanel not active, not starting screensaver"), _this15.screensaverStartedAt = null, _this15.screensaverStoppedAt = Date.now();
						return;
					}
					let activeElement = _this15.getActiveMediaElement();
					if (activeElement == _this15.imageOne ? (_this15.imageOneContainer.style.opacity = 1, _this15.imageTwoContainer.style.opacity = 0) : (_this15.imageOneContainer.style.opacity = 0, _this15.imageTwoContainer.style.opacity = 1), yield _this15.switchActiveMedia("start"), _this15.setupScreensaver(), config.keep_screen_on_time > 0) {
						let wp = _this15;
						setTimeout(function() {
							wp.screensaverRunning() && !wp.screenWakeLock.enabled && (logger.warning("Keep screen on will not work because the user didn't interact with the document first. https://goo.gl/xX8pDD"), wp.showMessage("info", "Keep screen on", "Please tap the screen for a moment to keep it awake and prevent it from turning off.", 15e3));
						}, 2e3);
					}
					_this15.lastMove = Date.now(), _this15.lastMediaUpdate = Date.now(), document.documentElement.style.overflow = "hidden", _this15.createInfoBoxContent(), _this15.style.visibility = "visible", _this15.style.opacity = 1, _this15.style.pointerEvents = "auto", _this15.setScreensaverEntityState(), (config.screensaver_start_navigation_path || config.screensaver_stop_close_browser_mod_popup) && (_this15.screensaverStopNavigationPathTimeout = setTimeout(() => {
						if (config.screensaver_start_navigation_path && (skipDisableScreensaverOnLocationChanged = !0, navigate(config.screensaver_start_navigation_path), setTimeout(() => {
							skipDisableScreensaverOnLocationChanged = !1;
						}, 5e3)), config.screensaver_stop_close_browser_mod_popup) {
							let bmp = getActiveBrowserModPopup();
							bmp && bmp.closeDialog();
						}
					}, (config.fade_in_time + 1) * 1e3));
				})();
			}
			screensaverRunning() {
				return !!this.screensaverStartedAt && this.screensaverStartedAt > 0;
			}
			stopScreensaver(fadeOutTime = 0) {
				logger.debug("Stop screensaver"), this.screensaverStartedAt = null, this.screensaverStoppedAt = Date.now(), document.documentElement.style.removeProperty("overflow"), this.screensaverStopNavigationPathTimeout && clearTimeout(this.screensaverStopNavigationPathTimeout), this.hideAllMessages(), this.debugBox.style.pointerEvents = "none", fadeOutTime > 0 ? this.style.transition = `opacity ${Math.round(fadeOutTime * 1e3)}ms ease-in-out` : this.style.transition = "", this.style.opacity = 0, this.style.visibility = "hidden", this.style.pointerEvents = "none", this.imageOneInfo.style.pointerEvents = "none", this.imageTwoInfo.style.pointerEvents = "none", this.infoBoxPosX.style.animation = "", this.infoBoxPosY.style.animation = "", this.idleSince = Date.now(), this.screenWakeLock.enabled && this.screenWakeLock.disable(), setTimeout(this.setScreensaverEntityState.bind(this), 25);
			}
			updateScreensaver() {
				let currentDate = /* @__PURE__ */ new Date(), now = currentDate.getTime();
				if (this.energyCollectionUpdateEnabled && now - this.lastEnergyCollectionUpdate >= this.energyCollectionUpdateInterval * 1e3 && (this.hass.connection._energy_wallpanel && this.hass.connection._energy_wallpanel.refresh(), this.lastEnergyCollectionUpdate = now), this.infoBoxContentCreatedDate && this.infoBoxContentCreatedDate.getDate() != currentDate.getDate() && this.createInfoBoxContent(), config.info_move_interval > 0 && now - this.lastMove >= config.info_move_interval * 1e3 && (config.info_move_pattern === "random" ? this.randomMove() : config.info_move_pattern === "corners" ? this.moveAroundCorners() : logger.error(`Unknown info move type ${config.info_move_pattern}`)), config.black_screen_after_time > 0 && now - this.screensaverStartedAt >= config.black_screen_after_time * 1e3 ? (logger.debug("Setting screen to black"), this.screensaverOverlay.style.background = "#000000") : config.show_images ? (now - this.lastMediaUpdate >= config.display_time * 1e3 && this.switchActiveMedia("display_time_elapsed"), now - this.lastMediaListUpdate >= config.media_list_update_interval * 1e3 && this.updateMediaList(null, !0), this.imageOneContainer.style.visibility != "visible" && (this.imageOneContainer.style.visibility = "visible"), this.imageTwoContainer.style.visibility != "visible" && (this.imageTwoContainer.style.visibility = "visible")) : (this.imageOneContainer.style.visibility != "hidden" && (this.imageOneContainer.style.visibility = "hidden"), this.imageTwoContainer.style.visibility != "hidden" && (this.imageTwoContainer.style.visibility = "hidden")), config.debug) {
					let html = "", conf = {};
					for (let key in config) ["profiles"].includes(key) ? conf[key] = "..." : conf[key] = config[key];
					if (html += "<a id=\"download_log\" href=\"\">Download log</a><br />", html += `<b>Version:</b> ${version}<br/>`, html += `<b>User-Agent:</b> ${navigator.userAgent}<br/>`, html += `<b>Config:</b> ${JSON.stringify(conf)}<br/>`, html += `<b>Fullscreen:</b> ${fullscreen}<br/>`, html += `<b>Screensaver started at:</b> ${wallpanel.screensaverStartedAt}<br/>`, html += `<b>Screen wake lock:</b> enabled=${this.screenWakeLock.enabled} native=${this.screenWakeLock.nativeWakeLockSupported} lock=${this.screenWakeLock._lock} player=${this.screenWakeLock._player} error=${this.screenWakeLock.error}<br/>`, this.screenWakeLock._player) {
						let p = this.screenWakeLock._player;
						html += `<b>Screen wake lock video</b>: readyState=${p.readyState} currentTime=${p.currentTime} paused=${p.paused} ended=${p.ended}<br/>`;
					}
					html += `<b>Media list size:</b> ${this.mediaList.length}<br/>`;
					let activeElement = this.getActiveMediaElement();
					if (activeElement) {
						html += `<b>Current media:</b> ${activeElement.mediaUrl}<br/>`;
						let mediaInfo = mediaInfoCache.get(activeElement.infoCacheUrl);
						mediaInfo && (html += `<b>Media info:</b> ${JSON.stringify(mediaInfo)}<br/>`);
					}
					this.debugBox.innerHTML = html, this.debugBox.querySelector("#download_log").addEventListener("click", function(event) {
						logger.downloadMessages(), event.preventDefault();
					}), this.debugBox.scrollTop = this.debugBox.scrollHeight;
				}
				this.screenWakeLock.enabled && now - this.screensaverStartedAt >= config.keep_screen_on_time * 1e3 && (logger.info(`Disable wake lock after ${config.keep_screen_on_time} seconds`), this.screenWakeLock.disable());
			}
			switchMediaDirection(direction) {
				this.mediaListDirection = direction, this.switchActiveMedia("user_action");
			}
			motionDetected() {
				this.stopScreensaver(config.fade_out_time_motion_detected);
			}
			handleInteractionEvent(evt) {
				let isClick = ["click", "touchend"].includes(evt.type), now = Date.now();
				this.idleSince = now;
				let swipe = "";
				if (evt.type == "touchstart") {
					evt.touches && evt.touches[0] && (this.touchStartX = evt.touches[0].clientX);
					return;
				} else if (evt.type == "touchend" && this.touchStartX >= 0 && evt.changedTouches && evt.changedTouches[0]) {
					let diffX = evt.changedTouches[0].clientX - this.touchStartX;
					diffX >= 5 ? swipe = "right" : diffX <= -5 && (swipe = "left"), this.touchStartX = -1;
				}
				if (!this.screensaverRunning()) {
					this.blockEventsUntil > now && (isClick && evt.preventDefault(), evt.stopImmediatePropagation()), isClick && this.setupScreensaver();
					return;
				}
				if (isClick && this.hideAllMessages()) {
					this.blockEventsUntil = now + 1e3;
					return;
				}
				let x = evt.clientX, y = evt.clientY;
				if (!x && evt.changedTouches && evt.changedTouches[0] && (x = evt.changedTouches[0].clientX), !y && evt.changedTouches && evt.changedTouches[0] && (y = evt.changedTouches[0].clientY), config.debug && x && x < 100 && y && y < 100) return;
				let bmp = getActiveBrowserModPopup();
				if (bmp) {
					let bm_elements = [bmp.shadowRoot.querySelector(".content"), bmp.shadowRoot.querySelector("ha-dialog-header")];
					for (let i = 0; i < bm_elements.length; i++) if (bm_elements[i]) {
						let pos = bm_elements[i].getBoundingClientRect();
						if (logger.debug("Event position:", bm_elements[i], x, y, pos.left, pos.right, pos.top, pos.bottom), x >= pos.left && x <= pos.right && y >= pos.top && y <= pos.bottom) {
							logger.debug("Event on browser mod popup:", bm_elements[i]);
							return;
						}
					}
				}
				if (config.iframe_interaction && mediaSourceType() == "iframe") return;
				if (config.content_interaction) {
					if (this.getMoreInfoDialog()) return;
					let elements = [];
					elements = elements.concat(this.__cards), elements = elements.concat(this.__badges), elements = elements.concat(this.__views), elements.push(this.shadowRoot.getElementById("wallpanel-screensaver-info-box-content")), elements.push(this.shadowRoot.getElementById("wallpanel-screensaver-fixed-info-box-content")), config.image_info_template == "analyze" && (elements.push(this.imageOneInfo), elements.push(this.imageTwoInfo));
					for (let i = 0; i < elements.length; i++) {
						let pos = elements[i].getBoundingClientRect();
						if (logger.debug("Event position:", elements[i], x, y, pos.left, pos.right, pos.top, pos.bottom), x >= pos.left && x <= pos.right && y >= pos.top && y <= pos.bottom) {
							logger.debug("Event on:", elements[i]);
							return;
						}
					}
				}
				isClick && evt.preventDefault(), evt.stopImmediatePropagation();
				let switchMedia = "";
				if (swipe) switchMedia = swipe == "left" ? "backwards" : "forwards";
				else if (evt instanceof MouseEvent || evt instanceof TouchEvent) {
					let right = 0, bottom = 0;
					if (x && (right = (this.currentWidth - x) / this.currentWidth), y && (bottom = (this.currentHeight - y) / this.currentHeight), config.touch_zone_size_next_image > 0 && right <= config.touch_zone_size_next_image / 100) if (isClick) switchMedia = "forwards";
					else return;
					else if (config.touch_zone_size_previous_image > 0 && right >= (100 - config.touch_zone_size_previous_image) / 100) if (isClick) switchMedia = "backwards";
					else return;
					else if (right >= .4 && right <= .6 && bottom <= .1) {
						let now$1 = /* @__PURE__ */ new Date();
						isClick && now$1 - this.lastClickTime < 500 ? (this.clickCount += 1, this.clickCount == 3 && (logger.purgeMessages(), config.debug = !config.debug, this.debugBox.style.visibility = config.debug ? "visible" : "hidden", this.debugBox.style.pointerEvents = config.debug ? "auto" : "none")) : this.clickCount = 1, this.lastClickTime = now$1;
						return;
					}
				}
				if (switchMedia) {
					this.updatingMedia ? logger.debug("Already switching media") : (logger.debug(`Switching media, direction ${switchMedia}`), this.mediaListDirection == switchMedia ? this.switchActiveMedia("user_action") : this.switchMediaDirection(switchMedia));
					return;
				}
				(!isClick || config.stop_screensaver_on_mouse_click) && (this.blockEventsUntil = now + config.control_reactivation_time * 1e3, this.stopScreensaver(config.fade_out_time_interaction));
			}
		}
		customElements.get("wallpanel-view") || customElements.define("wallpanel-view", WallpanelView), wallpanel = document.createElement("wallpanel-view"), elHaMain.shadowRoot.appendChild(wallpanel);
	}
	function activateWallpanel() {
		logger.debug("activateWallpanel");
		let hideToolbar = config.hide_toolbar, hideActionItems = config.hide_toolbar_action_icons;
		if (hideToolbar && !config.hide_toolbar_on_subviews && activeTab) {
			let pl = getHaPanelLovelace();
			if (pl && pl.lovelace && pl.lovelace.rawConfig && pl.lovelace.rawConfig.views) {
				for (let i = 0; i < pl.lovelace.rawConfig.views.length; i++) if (pl.lovelace.rawConfig.views[i].path == activeTab) {
					pl.lovelace.rawConfig.views[i].subview && (logger.debug(`Current tab '${activeTab}' is a subview, not hiding toolbar`), hideToolbar = !1, hideActionItems = !1);
					break;
				}
			}
		}
		setToolbarVisibility(hideToolbar, hideActionItems), setSidebarVisibility(config.hide_sidebar);
	}
	function deactivateWallpanel() {
		logger.debug("deactivateWallpanel"), wallpanel.screensaverRunning() && wallpanel.stopScreensaver(), setToolbarVisibility(!1, !1), setSidebarVisibility(!1);
	}
	function reconfigure() {
		if (!activePanel || !activeTab) {
			deactivateWallpanel();
			return;
		}
		updateConfig(), isActive() ? activateWallpanel() : deactivateWallpanel();
	}
	function locationChanged() {
		if (logger.debug(`Location changed from '${currentLocation}' to '${window.location.href}'`), window.location.href == currentLocation) return;
		currentLocation = window.location.href, wallpanel && wallpanel.screensaverRunning && wallpanel.screensaverRunning() && config.stop_screensaver_on_location_change && (skipDisableScreensaverOnLocationChanged ? (skipDisableScreensaverOnLocationChanged = !1, wallpanel.screensaverStopNavigationPathTimeout && clearTimeout(wallpanel.screensaverStopNavigationPathTimeout)) : wallpanel.stopScreensaver());
		let panel = null, tab = null, path = window.location.pathname.split("/");
		path.length > 1 && (panel = path[1], path.length > 2 && (tab = path[2]));
		let panelChanged = activePanel && panel != activePanel;
		activePanel = panel, activeTab = tab, panelChanged ? (logger.debug("Reset dashboard config"), dashboardConfig = {}, waitForEnv(reconfigure)) : reconfigure();
	}
	function waitForEnv(callback, startTime = null) {
		let now = Date.now();
		startTime === null && (startTime = now);
		let startupSeconds = (now - startTime) / 1e3;
		if (elHass = document.querySelector("body > home-assistant"), elHass && elHass.shadowRoot && (elHaMain = elHass.shadowRoot.querySelector("home-assistant-main")), !elHass || !elHass.shadowRoot || !elHaMain) {
			if (startupSeconds >= 5) {
				logger.error(`Wallpanel startup failed after ${startupSeconds} seconds, element home-assistant / home-assistant-main not found.`);
				return;
			}
			setTimeout(waitForEnv, 100, callback, startTime);
			return;
		}
		let pl = getHaPanelLovelace();
		if (!pl || !pl.lovelace || !pl.lovelace.config || !pl.lovelace.config) {
			if (startupSeconds >= 5) {
				logger.error(`Wallpanel startup failed after ${startupSeconds} seconds, lovelace config not found.`);
				return;
			}
			setTimeout(waitForEnv, 100, callback, startTime);
			return;
		}
		if (!customElements.get("hui-view")) {
			if (startupSeconds >= 5) {
				logger.error(`Wallpanel startup failed after ${startupSeconds} seconds, hui-view not found.`);
				return;
			}
			setTimeout(waitForEnv, 100, callback, startTime);
			return;
		}
		if (!window.browser_mod) {
			let waitTime = getDashboardWallpanelConfig(["wait_for_browser_mod_time"]).wait_for_browser_mod_time;
			if (waitTime === void 0 && (waitTime = defaultConfig.wait_for_browser_mod_time), startupSeconds < waitTime) {
				setTimeout(waitForEnv, 100, callback, startTime);
				return;
			}
		}
		window.browser_mod && (window.browser_mod.entity_id ? browserId = window.browser_mod.entity_id : window.browser_mod.browserID && (browserId = window.browser_mod.browserID.replace("-", "_"))), callback();
	}
	function startup() {
		userId = (elHass.hass || elHass.__hass).user.id, userDisplayname = (elHass.hass || elHass.__hass).user.name, logger.debug(`userId: ${userId}, userName: null, userDisplayname: ${userDisplayname}`), updateConfig(), initWallpanel(), window.addEventListener("location-changed", (event) => {
			let url = null;
			try {
				url = event.target.location.href;
			} catch (e) {
				logger.debug(e);
			}
			logger.debug("location-changed", url, event), setTimeout(locationChanged, 20);
		}), window.navigation && window.navigation.addEventListener("navigate", (event) => {
			let url = null;
			try {
				url = event.destination.url;
			} catch (e) {
				logger.debug(e);
			}
			logger.debug("navigate", url, event), setTimeout(locationChanged, 30);
		}), (elHass.hass || elHass.__hass).connection.subscribeEvents(function(event) {
			logger.debug("lovelace_updated", event);
			let dashboard = event.data.url_path ? event.data.url_path : "lovelace";
			dashboard == activePanel && (elHass.hass || elHass.__hass).connection.sendMessagePromise({
				type: "lovelace/config",
				url_path: event.data.url_path
			}).then((data) => {
				if (dashboardConfig = {}, data.wallpanel) for (let key in data.wallpanel) (key in defaultConfig || key in renamedConfigOptions) && (dashboardConfig[key] = data.wallpanel[key]);
				reconfigure();
			});
		}, "lovelace_updated"), setTimeout(locationChanged, 0);
	}
	console.info(`%c🖼️ Wallpanel version ${version}`, "color: #34b6f9; font-weight: bold;"), waitForEnv(startup);
	var debug = !1, EXIF = function(obj) {
		if (obj instanceof EXIF) return obj;
		if (!(this instanceof EXIF)) return new EXIF(obj);
		this.EXIFwrapped = obj;
	}, ExifTags = EXIF.Tags = {
		36864: "ExifVersion",
		40960: "FlashpixVersion",
		40961: "ColorSpace",
		40962: "PixelXDimension",
		40963: "PixelYDimension",
		37121: "ComponentsConfiguration",
		37122: "CompressedBitsPerPixel",
		37500: "MakerNote",
		37510: "UserComment",
		40964: "RelatedSoundFile",
		36867: "DateTimeOriginal",
		36868: "DateTimeDigitized",
		37520: "SubsecTime",
		37521: "SubsecTimeOriginal",
		37522: "SubsecTimeDigitized",
		33434: "ExposureTime",
		33437: "FNumber",
		34850: "ExposureProgram",
		34852: "SpectralSensitivity",
		34855: "ISOSpeedRatings",
		34856: "OECF",
		37377: "ShutterSpeedValue",
		37378: "ApertureValue",
		37379: "BrightnessValue",
		37380: "ExposureBias",
		37381: "MaxApertureValue",
		37382: "SubjectDistance",
		37383: "MeteringMode",
		37384: "LightSource",
		37385: "Flash",
		37396: "SubjectArea",
		37386: "FocalLength",
		41483: "FlashEnergy",
		41484: "SpatialFrequencyResponse",
		41486: "FocalPlaneXResolution",
		41487: "FocalPlaneYResolution",
		41488: "FocalPlaneResolutionUnit",
		41492: "SubjectLocation",
		41493: "ExposureIndex",
		41495: "SensingMethod",
		41728: "FileSource",
		41729: "SceneType",
		41730: "CFAPattern",
		41985: "CustomRendered",
		41986: "ExposureMode",
		41987: "WhiteBalance",
		41988: "DigitalZoomRation",
		41989: "FocalLengthIn35mmFilm",
		41990: "SceneCaptureType",
		41991: "GainControl",
		41992: "Contrast",
		41993: "Saturation",
		41994: "Sharpness",
		41995: "DeviceSettingDescription",
		41996: "SubjectDistanceRange",
		40965: "InteroperabilityIFDPointer",
		42016: "ImageUniqueID"
	}, TiffTags = EXIF.TiffTags = {
		256: "ImageWidth",
		257: "ImageHeight",
		34665: "ExifIFDPointer",
		34853: "GPSInfoIFDPointer",
		40965: "InteroperabilityIFDPointer",
		258: "BitsPerSample",
		259: "Compression",
		262: "PhotometricInterpretation",
		274: "Orientation",
		277: "SamplesPerPixel",
		284: "PlanarConfiguration",
		530: "YCbCrSubSampling",
		531: "YCbCrPositioning",
		282: "XResolution",
		283: "YResolution",
		296: "ResolutionUnit",
		273: "StripOffsets",
		278: "RowsPerStrip",
		279: "StripByteCounts",
		513: "JPEGInterchangeFormat",
		514: "JPEGInterchangeFormatLength",
		301: "TransferFunction",
		318: "WhitePoint",
		319: "PrimaryChromaticities",
		529: "YCbCrCoefficients",
		532: "ReferenceBlackWhite",
		306: "DateTime",
		270: "ImageDescription",
		271: "Make",
		272: "Model",
		305: "Software",
		315: "Artist",
		33432: "Copyright"
	}, GPSTags = EXIF.GPSTags = {
		0: "GPSVersionID",
		1: "GPSLatitudeRef",
		2: "GPSLatitude",
		3: "GPSLongitudeRef",
		4: "GPSLongitude",
		5: "GPSAltitudeRef",
		6: "GPSAltitude",
		7: "GPSTimeStamp",
		8: "GPSSatellites",
		9: "GPSStatus",
		10: "GPSMeasureMode",
		11: "GPSDOP",
		12: "GPSSpeedRef",
		13: "GPSSpeed",
		14: "GPSTrackRef",
		15: "GPSTrack",
		16: "GPSImgDirectionRef",
		17: "GPSImgDirection",
		18: "GPSMapDatum",
		19: "GPSDestLatitudeRef",
		20: "GPSDestLatitude",
		21: "GPSDestLongitudeRef",
		22: "GPSDestLongitude",
		23: "GPSDestBearingRef",
		24: "GPSDestBearing",
		25: "GPSDestDistanceRef",
		26: "GPSDestDistance",
		27: "GPSProcessingMethod",
		28: "GPSAreaInformation",
		29: "GPSDateStamp",
		30: "GPSDifferential"
	}, IFD1Tags = EXIF.IFD1Tags = {
		256: "ImageWidth",
		257: "ImageHeight",
		258: "BitsPerSample",
		259: "Compression",
		262: "PhotometricInterpretation",
		273: "StripOffsets",
		274: "Orientation",
		277: "SamplesPerPixel",
		278: "RowsPerStrip",
		279: "StripByteCounts",
		282: "XResolution",
		283: "YResolution",
		284: "PlanarConfiguration",
		296: "ResolutionUnit",
		513: "JpegIFOffset",
		514: "JpegIFByteCount",
		529: "YCbCrCoefficients",
		530: "YCbCrSubSampling",
		531: "YCbCrPositioning",
		532: "ReferenceBlackWhite"
	}, StringValues = EXIF.StringValues = {
		ExposureProgram: {
			0: "Not defined",
			1: "Manual",
			2: "Normal program",
			3: "Aperture priority",
			4: "Shutter priority",
			5: "Creative program",
			6: "Action program",
			7: "Portrait mode",
			8: "Landscape mode"
		},
		MeteringMode: {
			0: "Unknown",
			1: "Average",
			2: "CenterWeightedAverage",
			3: "Spot",
			4: "MultiSpot",
			5: "Pattern",
			6: "Partial",
			255: "Other"
		},
		LightSource: {
			0: "Unknown",
			1: "Daylight",
			2: "Fluorescent",
			3: "Tungsten (incandescent light)",
			4: "Flash",
			9: "Fine weather",
			10: "Cloudy weather",
			11: "Shade",
			12: "Daylight fluorescent (D 5700 - 7100K)",
			13: "Day white fluorescent (N 4600 - 5400K)",
			14: "Cool white fluorescent (W 3900 - 4500K)",
			15: "White fluorescent (WW 3200 - 3700K)",
			17: "Standard light A",
			18: "Standard light B",
			19: "Standard light C",
			20: "D55",
			21: "D65",
			22: "D75",
			23: "D50",
			24: "ISO studio tungsten",
			255: "Other"
		},
		Flash: {
			0: "Flash did not fire",
			1: "Flash fired",
			5: "Strobe return light not detected",
			7: "Strobe return light detected",
			9: "Flash fired, compulsory flash mode",
			13: "Flash fired, compulsory flash mode, return light not detected",
			15: "Flash fired, compulsory flash mode, return light detected",
			16: "Flash did not fire, compulsory flash mode",
			24: "Flash did not fire, auto mode",
			25: "Flash fired, auto mode",
			29: "Flash fired, auto mode, return light not detected",
			31: "Flash fired, auto mode, return light detected",
			32: "No flash function",
			65: "Flash fired, red-eye reduction mode",
			69: "Flash fired, red-eye reduction mode, return light not detected",
			71: "Flash fired, red-eye reduction mode, return light detected",
			73: "Flash fired, compulsory flash mode, red-eye reduction mode",
			77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
			79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
			89: "Flash fired, auto mode, red-eye reduction mode",
			93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
			95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
		},
		SensingMethod: {
			1: "Not defined",
			2: "One-chip color area sensor",
			3: "Two-chip color area sensor",
			4: "Three-chip color area sensor",
			5: "Color sequential area sensor",
			7: "Trilinear sensor",
			8: "Color sequential linear sensor"
		},
		SceneCaptureType: {
			0: "Standard",
			1: "Landscape",
			2: "Portrait",
			3: "Night scene"
		},
		SceneType: { 1: "Directly photographed" },
		CustomRendered: {
			0: "Normal process",
			1: "Custom process"
		},
		WhiteBalance: {
			0: "Auto white balance",
			1: "Manual white balance"
		},
		GainControl: {
			0: "None",
			1: "Low gain up",
			2: "High gain up",
			3: "Low gain down",
			4: "High gain down"
		},
		Contrast: {
			0: "Normal",
			1: "Soft",
			2: "Hard"
		},
		Saturation: {
			0: "Normal",
			1: "Low saturation",
			2: "High saturation"
		},
		Sharpness: {
			0: "Normal",
			1: "Soft",
			2: "Hard"
		},
		SubjectDistanceRange: {
			0: "Unknown",
			1: "Macro",
			2: "Close view",
			3: "Distant view"
		},
		FileSource: { 3: "DSC" },
		Components: {
			0: "",
			1: "Y",
			2: "Cb",
			3: "Cr",
			4: "R",
			5: "G",
			6: "B"
		}
	};
	function imageHasData(img) {
		return !!img.exifdata;
	}
	function base64ToArrayBuffer(base64) {
		base64 = base64.replace(RegExp("^data:([^;]+);base64,", "gim"), "");
		for (var binary = atob(base64), len = binary.length, buffer = new ArrayBuffer(len), view = new Uint8Array(buffer), i = 0; i < len; i++) view[i] = binary.charCodeAt(i);
		return buffer;
	}
	function objectURLToBlob(url, callback) {
		var http = new XMLHttpRequest();
		http.open("GET", url, !0), http.responseType = "blob", http.onload = function() {
			(this.status == 200 || this.status === 0) && callback(this.response);
		}, http.send();
	}
	function getImageData(img, callback) {
		function handleBinaryFile(binFile) {
			var data = findEXIFinJPEG(binFile);
			img.exifdata = data || {};
			var iptcdata = findIPTCinJPEG(binFile);
			if (img.iptcdata = iptcdata || {}, EXIF.isXmpEnabled) {
				var xmpdata = findXMPinJPEG(binFile);
				img.xmpdata = xmpdata || {};
			}
			callback && callback.call(img);
		}
		if (img.src) if (/^data:/i.test(img.src)) {
			var arrayBuffer = base64ToArrayBuffer(img.src);
			handleBinaryFile(arrayBuffer);
		} else if (/^blob:/i.test(img.src)) {
			var blobFileReader = new FileReader();
			blobFileReader.onload = function(e) {
				handleBinaryFile(e.target.result);
			}, objectURLToBlob(img.src, function(blob) {
				blobFileReader.readAsArrayBuffer(blob);
			});
		} else {
			var http = new XMLHttpRequest();
			http.onload = function() {
				if (this.status == 200 || this.status === 0) handleBinaryFile(http.response);
				else {
					logger.error("Could not load image");
					return;
				}
				http = null;
			}, http.open("GET", img.src, !0), http.responseType = "arraybuffer", http.send(null);
		}
		else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
			var fileReader = new FileReader();
			fileReader.onload = function(e) {
				debug && logger.log("Got file of length " + e.target.result.byteLength), handleBinaryFile(e.target.result);
			}, fileReader.readAsArrayBuffer(img);
		}
	}
	function findEXIFinJPEG(file) {
		var dataView = new DataView(file);
		if (debug && logger.log("Got file of length " + file.byteLength), dataView.getUint8(0) != 255 || dataView.getUint8(1) != 216) return debug && logger.log("Not a valid JPEG"), !1;
		for (var offset = 2, length = file.byteLength, marker; offset < length;) {
			if (dataView.getUint8(offset) != 255) return debug && logger.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset)), !1;
			if (marker = dataView.getUint8(offset + 1), debug && logger.log(marker), marker == 225) return debug && logger.log("Found 0xFFE1 marker"), readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);
			offset += 2 + dataView.getUint16(offset + 2);
		}
	}
	function findIPTCinJPEG(file) {
		var dataView = new DataView(file);
		if (debug && logger.log("Got file of length " + file.byteLength), dataView.getUint8(0) != 255 || dataView.getUint8(1) != 216) return debug && logger.log("Not a valid JPEG"), !1;
		for (var offset = 2, length = file.byteLength, isFieldSegmentStart = function(dataView$1, offset$1) {
			return dataView$1.getUint8(offset$1) === 56 && dataView$1.getUint8(offset$1 + 1) === 66 && dataView$1.getUint8(offset$1 + 2) === 73 && dataView$1.getUint8(offset$1 + 3) === 77 && dataView$1.getUint8(offset$1 + 4) === 4 && dataView$1.getUint8(offset$1 + 5) === 4;
		}; offset < length;) {
			if (isFieldSegmentStart(dataView, offset)) {
				var nameHeaderLength = dataView.getUint8(offset + 7);
				nameHeaderLength % 2 != 0 && (nameHeaderLength += 1), nameHeaderLength === 0 && (nameHeaderLength = 4);
				var startOffset = offset + 8 + nameHeaderLength, sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
				return readIPTCData(file, startOffset, sectionLength);
			}
			offset++;
		}
	}
	var IptcFieldMap = {
		25: "keywords",
		55: "dateCreated",
		80: "byline",
		85: "bylineTitle",
		90: "city",
		92: "sublocation",
		94: "state",
		100: "countryCode",
		101: "countryName",
		103: "OriginalTransmissionReference",
		105: "headline",
		109: "credit",
		110: "credit",
		116: "copyright",
		118: "contact",
		120: "caption",
		122: "captionWriter",
		125: "rasterizedCaption",
		130: "imageType",
		131: "imageOrientation",
		135: "languageID",
		150: "audioType",
		151: "audioSamplingRate",
		152: "audioSamplingRes",
		153: "audioDuration",
		154: "audioOutcue",
		200: "previewFileFormat",
		201: "previewFileFormatVer",
		202: "previewData",
		15: "category"
	};
	function readIPTCData(file, startOffset, sectionLength) {
		for (var dataView = new DataView(file), data = {}, fieldValue, fieldName, dataSize, segmentType, segmentStartPos = startOffset; segmentStartPos < startOffset + sectionLength;) dataView.getUint8(segmentStartPos) === 28 && dataView.getUint8(segmentStartPos + 1) === 2 && (segmentType = dataView.getUint8(segmentStartPos + 2), segmentType in IptcFieldMap && (dataSize = dataView.getInt16(segmentStartPos + 3), fieldName = IptcFieldMap[segmentType], fieldValue = getStringFromDB(dataView, segmentStartPos + 5, dataSize), Object.prototype.hasOwnProperty.call(data, fieldName) ? data[fieldName] instanceof Array ? data[fieldName].push(fieldValue) : data[fieldName] = [data[fieldName], fieldValue] : data[fieldName] = fieldValue)), segmentStartPos++;
		return data;
	}
	function readTags(file, tiffStart, dirStart, strings, bigEnd) {
		var entries = file.getUint16(dirStart, !bigEnd), tags = {}, entryOffset, tag, i;
		for (i = 0; i < entries; i++) entryOffset = dirStart + i * 12 + 2, tag = strings[file.getUint16(entryOffset, !bigEnd)], !tag && debug && logger.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd)), tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
		return tags;
	}
	function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
		var type = file.getUint16(entryOffset + 2, !bigEnd), numValues = file.getUint32(entryOffset + 4, !bigEnd), valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart, offset, vals, val, n, numerator, denominator;
		switch (type) {
			case 1:
			case 7:
				if (numValues == 1) return file.getUint8(entryOffset + 8, !bigEnd);
				for (offset = numValues > 4 ? valueOffset : entryOffset + 8, vals = [], n = 0; n < numValues; n++) vals[n] = file.getUint8(offset + n);
				return vals;
			case 2: return offset = numValues > 4 ? valueOffset : entryOffset + 8, getStringFromDB(file, offset, numValues - 1);
			case 3:
				if (numValues == 1) return file.getUint16(entryOffset + 8, !bigEnd);
				for (offset = numValues > 2 ? valueOffset : entryOffset + 8, vals = [], n = 0; n < numValues; n++) vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
				return vals;
			case 4:
				if (numValues == 1) return file.getUint32(entryOffset + 8, !bigEnd);
				for (vals = [], n = 0; n < numValues; n++) vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
				return vals;
			case 5:
				if (numValues == 1) return numerator = file.getUint32(valueOffset, !bigEnd), denominator = file.getUint32(valueOffset + 4, !bigEnd), val = new Number(numerator / denominator), val.numerator = numerator, val.denominator = denominator, val;
				for (vals = [], n = 0; n < numValues; n++) numerator = file.getUint32(valueOffset + 8 * n, !bigEnd), denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd), vals[n] = new Number(numerator / denominator), vals[n].numerator = numerator, vals[n].denominator = denominator;
				return vals;
			case 9:
				if (numValues == 1) return file.getInt32(entryOffset + 8, !bigEnd);
				for (vals = [], n = 0; n < numValues; n++) vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
				return vals;
			case 10:
				if (numValues == 1) return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
				for (vals = [], n = 0; n < numValues; n++) vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
				return vals;
		}
	}
	function getNextIFDOffset(dataView, dirStart, bigEnd) {
		var entries = dataView.getUint16(dirStart, !bigEnd);
		return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd);
	}
	function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd) {
		var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart + firstIFDOffset, bigEnd);
		if (IFD1OffsetPointer) {
			if (IFD1OffsetPointer > dataView.byteLength) return {};
		} else return {};
		var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd);
		if (thumbTags.Compression) switch (thumbTags.Compression) {
			case 6:
				if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
					var tOffset = tiffStart + thumbTags.JpegIFOffset, tLength = thumbTags.JpegIFByteCount;
					thumbTags.blob = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], { type: "image/jpeg" });
				}
				break;
			case 1:
				logger.log("Thumbnail image format is TIFF, which is not implemented.");
				break;
			default: logger.log("Unknown thumbnail image format '%s'", thumbTags.Compression);
		}
		else thumbTags.PhotometricInterpretation == 2 && logger.log("Thumbnail image format is RGB, which is not implemented.");
		return thumbTags;
	}
	function getStringFromDB(buffer, start, length) {
		for (var outstr = "", arOut = [], j = 0, n = start; n < start + length; n++) arOut[j] = "0x" + buffer.getUint8(n).toString(16), j++;
		return outstr = Utf8ArrayToStr(arOut), outstr;
	}
	function Utf8ArrayToStr(array) {
		var out, i, len, c, char2, char3;
		for (out = "", len = array.length, i = 0; i < len;) switch (c = array[i++], c >> 4) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				out += String.fromCharCode(c);
				break;
			case 12:
			case 13:
				char2 = array[i++], out += String.fromCharCode((c & 31) << 6 | char2 & 63);
				break;
			case 14:
				char2 = array[i++], char3 = array[i++], out += String.fromCharCode((c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0);
				break;
		}
		return out;
	}
	function readEXIFData(file, start) {
		if (getStringFromDB(file, start, 4) != "Exif") return debug && logger.log("Not valid EXIF data! " + getStringFromDB(file, start, 4)), !1;
		var bigEnd, tags, tag, exifData, gpsData, tiffOffset = start + 6;
		if (file.getUint16(tiffOffset) == 18761) bigEnd = !1;
		else if (file.getUint16(tiffOffset) == 19789) bigEnd = !0;
		else return debug && logger.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
		if (file.getUint16(tiffOffset + 2, !bigEnd) != 42) return debug && logger.log("Not valid TIFF data! (no 0x002A)"), !1;
		var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
		if (firstIFDOffset < 8) return debug && logger.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd)), !1;
		if (tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd), tags.ExifIFDPointer) for (tag in exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd), exifData) {
			switch (tag) {
				case "LightSource":
				case "Flash":
				case "MeteringMode":
				case "ExposureProgram":
				case "SensingMethod":
				case "SceneCaptureType":
				case "SceneType":
				case "CustomRendered":
				case "WhiteBalance":
				case "GainControl":
				case "Contrast":
				case "Saturation":
				case "Sharpness":
				case "SubjectDistanceRange":
				case "FileSource":
					exifData[tag] = StringValues[tag][exifData[tag]];
					break;
				case "ExifVersion":
				case "FlashpixVersion":
					exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
					break;
				case "ComponentsConfiguration":
					exifData[tag] = StringValues.Components[exifData[tag][0]] + StringValues.Components[exifData[tag][1]] + StringValues.Components[exifData[tag][2]] + StringValues.Components[exifData[tag][3]];
					break;
			}
			tags[tag] = exifData[tag];
		}
		if (tags.GPSInfoIFDPointer) for (tag in gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd), gpsData) {
			switch (tag) {
				case "GPSVersionID":
					gpsData[tag] = gpsData[tag][0] + "." + gpsData[tag][1] + "." + gpsData[tag][2] + "." + gpsData[tag][3];
					break;
			}
			tags[tag] = gpsData[tag];
		}
		return tags.thumbnail = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd), tags;
	}
	function findXMPinJPEG(file) {
		if ("DOMParser" in self) {
			var dataView = new DataView(file);
			if (debug && logger.log("Got file of length " + file.byteLength), dataView.getUint8(0) != 255 || dataView.getUint8(1) != 216) return debug && logger.log("Not a valid JPEG"), !1;
			for (var offset = 2, length = file.byteLength, dom = new DOMParser(); offset < length - 4;) if (getStringFromDB(dataView, offset, 4) == "http") {
				var startOffset = offset - 1, sectionLength = dataView.getUint16(offset - 2) - 1, xmpString = getStringFromDB(dataView, startOffset, sectionLength), xmpEndIndex = xmpString.indexOf("xmpmeta>") + 8;
				xmpString = xmpString.substring(xmpString.indexOf("<x:xmpmeta"), xmpEndIndex);
				var indexOfXmp = xmpString.indexOf("x:xmpmeta") + 10;
				xmpString = xmpString.slice(0, indexOfXmp) + "xmlns:Iptc4xmpCore=\"http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:tiff=\"http://ns.adobe.com/tiff/1.0/\" xmlns:plus=\"http://schemas.android.com/apk/lib/com.google.android.gms.plus\" xmlns:ext=\"http://www.gettyimages.com/xsltExtension/1.0\" xmlns:exif=\"http://ns.adobe.com/exif/1.0/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\" xmlns:xapGImg=\"http://ns.adobe.com/xap/1.0/g/img/\" xmlns:Iptc4xmpExt=\"http://iptc.org/std/Iptc4xmpExt/2008-02-29/\" " + xmpString.slice(indexOfXmp);
				var domDocument = dom.parseFromString(xmpString, "text/xml");
				return xml2Object(domDocument);
			} else offset++;
		}
	}
	function xml2json(xml) {
		var json = {};
		if (xml.nodeType == 1) {
			if (xml.attributes.length > 0) {
				json["@attributes"] = {};
				for (var j = 0; j < xml.attributes.length; j++) {
					var attribute = xml.attributes.item(j);
					json["@attributes"][attribute.nodeName] = attribute.nodeValue;
				}
			}
		} else if (xml.nodeType == 3) return xml.nodeValue;
		if (xml.hasChildNodes()) for (var i = 0; i < xml.childNodes.length; i++) {
			var child = xml.childNodes.item(i), nodeName = child.nodeName;
			if (json[nodeName] == null) json[nodeName] = xml2json(child);
			else {
				if (json[nodeName].push == null) {
					var old = json[nodeName];
					json[nodeName] = [], json[nodeName].push(old);
				}
				json[nodeName].push(xml2json(child));
			}
		}
		return json;
	}
	function xml2Object(xml) {
		try {
			var obj = {};
			if (xml.children.length > 0) for (var i = 0; i < xml.children.length; i++) {
				var item = xml.children.item(i), attributes = item.attributes;
				for (var idx in attributes) {
					var itemAtt = attributes[idx], dataKey = itemAtt.nodeName, dataValue = itemAtt.nodeValue;
					dataKey !== void 0 && (obj[dataKey] = dataValue);
				}
				var nodeName = item.nodeName;
				if (obj[nodeName] === void 0) obj[nodeName] = xml2json(item);
				else {
					if (obj[nodeName].push === void 0) {
						var old = obj[nodeName];
						obj[nodeName] = [], obj[nodeName].push(old);
					}
					obj[nodeName].push(xml2json(item));
				}
			}
			else obj = xml.textContent;
			return obj;
		} catch (e) {
			logger.log(e.message);
		}
	}
	EXIF.enableXmp = function() {
		EXIF.isXmpEnabled = !0;
	}, EXIF.disableXmp = function() {
		EXIF.isXmpEnabled = !1;
	}, EXIF.getData = function(img, callback) {
		return (self.Image && img instanceof self.Image || self.HTMLImageElement && img instanceof self.HTMLImageElement) && !img.complete ? !1 : (imageHasData(img) ? callback && callback.call(img) : getImageData(img, callback), !0);
	}, EXIF.getTag = function(img, tag) {
		if (imageHasData(img)) return img.exifdata[tag];
	}, EXIF.getIptcTag = function(img, tag) {
		if (imageHasData(img)) return img.iptcdata[tag];
	}, EXIF.getAllTags = function(img) {
		if (!imageHasData(img)) return {};
		var a, data = img.exifdata, tags = {};
		for (a in data) Object.prototype.hasOwnProperty.call(data, a) && (tags[a] = data[a]);
		return tags;
	}, EXIF.getAllIptcTags = function(img) {
		if (!imageHasData(img)) return {};
		var a, data = img.iptcdata, tags = {};
		for (a in data) Object.prototype.hasOwnProperty.call(data, a) && (tags[a] = data[a]);
		return tags;
	}, EXIF.ConvertDMSToDD = function(degrees, minutes, seconds, direction) {
		var dd = degrees + minutes / 60 + seconds / 3600;
		return (direction == "S" || direction == "W") && (dd *= -1), dd;
	}, EXIF.pretty = function(img) {
		if (!imageHasData(img)) return "";
		var a, data = img.exifdata, strPretty = "";
		for (a in data) Object.prototype.hasOwnProperty.call(data, a) && (typeof data[a] == "object" ? data[a] instanceof Number ? strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n" : strPretty += a + " : [" + data[a].length + " values]\r\n" : strPretty += a + " : " + data[a] + "\r\n");
		return strPretty;
	}, EXIF.readFromBinaryFile = function(file) {
		return findEXIFinJPEG(file);
	};
})();
