
var web3 = null;
var accountAddress = null;
var isAccountInit = false;
var erc20ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
var singlePoolABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"contract IERC20","name":"rewardToken","type":"address"},{"internalType":"contract ISingleCherryPool","name":"pool","type":"address"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"totalDeposit","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"},{"internalType":"uint256","name":"accPerShare","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"statistics","outputs":[{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"pendingReward","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"}];

var coinInfo = {
    "CHE": {
        "address": "0x8179D97Eb6488860d816e3EcAFE694a4153F216c",
        "decimals": 18
    },
    "USDT": {
        "address": "0x382bb369d343125bfb2117af9c149795c6c65c50",
        "decimals": 18
    },
    "BTCK": {
        "address": "0x54e4622dc504176b3bb432dccaf504569699a7ff",
        "decimals": 18
    },
    "ETHK": {
        "address": "0xEF71CA2EE68F45B9Ad6F72fbdb33d707b872315C",
        "decimals": 18
    }
};

var priceFormat = function (val) {

    var number_format = function (number, decimals, decPoint, thousandsSep) {

        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number;
        var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
        var sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
        var dec = typeof decPoint === 'undefined' ? '.' : decPoint;
        var s = '';

        var toFixedFix = function toFixedFix(n, prec) {
            if (('' + n).indexOf('e') === -1) {
                return +(Math.round(n + 'e+' + prec) + 'e-' + prec);
            } else {
                var arr = ('' + n).split('e');
                var sig = '';
                if (+arr[1] + prec > 0) {
                    sig = '+';
                }
                return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec);
            }
        };

        s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }

        return s.join(dec);
    };

    var absVal = Math.abs(val);

    if (absVal === 0) {
        return "0.000";
    }

    if (absVal < 1e-6) {
        return "<0.000001";
    }

    if (absVal < 0.01) {
        return number_format(val, 6, '.', ',');
    }

    if (absVal < 0.1) {
        return number_format(val, 5, '.', ',');
    }

    if (absVal < 1) {
        return number_format(val, 4, '.', ',');
    }

    if (absVal < 10) {
        return number_format(val, 3, '.', ',');
    }

    var result = number_format(val, 2, '.', ',');
    return result;
};

(function() {

    var web3 = new Web3("https://exchainrpc.okex.org");
    var getPoolInfo = function(pid, poolAddress, callback, ptr) {

        var pool = new web3.eth.Contract(singlePoolABI, poolAddress);
        pool.methods.poolInfo(pid).call()
            .then(function(poolinfo) {
                callback(poolinfo, ptr);
            })
            .catch(function(err){
                setTimeout(function(){
                    getPoolInfo(pid, poolAddress, callback, ptr);
                }, 3000);
            });
    };

    var getStatistics = function(pid, poolAddress, callback, ptr) {

        var pool = new web3.eth.Contract(singlePoolABI, poolAddress);
        pool.methods.statistics(pid).call()
            .then(function(data) {
                callback(data, ptr);
            })
            .catch(function(err){
                setTimeout(function(){
                    getStatistics(pid, poolAddress, callback, ptr);
                }, 3000);
            });
    };

    var run = function() {

        var pools = document.querySelectorAll(".pool");
        for(var i = 0; i < pools.length; i++) {

            var pid = $(pools[i]).attr("data-pool-id");
            var poolAddress = $(pools[i]).attr("data-pool");

            getPoolInfo(pid, poolAddress, function(data, ptr) {

                var coin = coinInfo[$(ptr).attr("data-name")];
                var totalDeposit = new BigNumber(data.totalDeposit).div(new BigNumber(10).pow(coin.decimals)).toNumber();
                var totalReward = new BigNumber(data.totalReward).div(new BigNumber(10).pow(coin.decimals)).toNumber();
                $(ptr).find(".pool-deposit-value").html(priceFormat(totalDeposit+totalReward));

            }, pools[i]);

            getStatistics(pid, poolAddress, function(data, ptr) {

                var share = new BigNumber(data.share).div(1e12).toNumber();
                var apr = (1 / (parseInt(data.time) / (365 * 86400)) * share * 100).toFixed(2);
                $(ptr).find(".pool-apr-value").html(apr);

            }, pools[i]);
        }
    };

    setInterval(run, 1000 * 10);
    run();

})();

(function() {

    var metamaskInit = function() {

        if (typeof window.ethereum === 'undefined') {
            alert("未找到MetaMask钱包");
        }

        var accountsChanged = function(accounts) {

            if(accounts.length > 0) {

                var account = accounts[0];
                $("#user").attr("data-target", "userinfo").html(account.substr(0, 4) + "..." + account.substr(account.length - 4, 4));
                $(".connect-modal-header-close").trigger("click");
                web3 = new Web3(window.ethereum);
                accountAddress = account;
            }
            else {

                $("#user").attr("data-target", "#connect-modal").html("连接钱包");
                isAccountInit = false;
                accountAddress = null;
                web3 = null;
            }
        };

        ethereum.on('accountsChanged', accountsChanged);
        ethereum.on('chainChanged', function (chainId) {

            if (0x42 == chainId) {

                ethereum.request({ method: 'eth_requestAccounts' })
                    .then(accountsChanged)
                    .catch((err) => {

                        if (err.code === 4001) {
                            alert("请连接MetaMask");
                        } else {
                            console.log(err);
                        }
                    });
            }
            else {

                $("#user").attr("data-target", "").html("网络错误");
                isAccountInit = false;
                accountAddress = null;
                web3 = null;
            }
        });

        ethereum.request({ method: 'eth_requestAccounts' })
            .then(accountsChanged)
            .catch((err) => {

                if (err.code === 4001) {
                    alert("请连接MetaMask");
                } else {
                    console.log(err);
                }
            });
    };

    $("#wallet-connect-metamask").click(function() {
        metamaskInit();
    });

})();

(function() {

    setInterval(function() {

        if (null === web3) {

            var pools = document.querySelectorAll(".pool");
            for(var i = 0; i < pools.length; i++) {

                var node = pools[i].querySelectorAll(".pool-control");
                if (0 == $(node).find(".pool-control-connect").length) {
                    $(node).html('<button class="pool-control-connect" type="button" data-toggle="modal" data-target="#connect-modal">解锁钱包</button>');
                    $(pools[i]).find(".pool-user-deposit-value").html("0.000");
                    $(pools[i]).find(".pool-reward-value").html("0.000");
                }
            }
        }

    }, 100);

})();

(function() {

    var isApprove = function(tokenAddress, poolAddress, amount, callback, ptr) {

        var token = new web3.eth.Contract(erc20ABI, tokenAddress, {
            from: accountAddress
        });

        token.methods.allowance(accountAddress, poolAddress).call()
            .then(function(data) {

                if (new BigNumber(data).comparedTo(new BigNumber(amount)) >= 0) {
                    callback(true, ptr);
                }
                else {
                    callback(false, ptr);
                }

            })
            .catch(function(err) {
                setTimeout(function() {
                    isApprove(tokenAddress, poolAddress, amount, callback, ptr);
                }, 3000);
            });
    };

    var getUserInfo = function(pid, poolAddress, callback, ptr) {

        var pool = new web3.eth.Contract(singlePoolABI, poolAddress, {
            from: accountAddress
        });

        pool.methods.userInfo(pid, accountAddress).call()
            .then(function(userinfo) {

                pool.methods.pendingReward(pid, accountAddress).call()
                .then(function(pendingReward) {
    
                    callback({
                        amount: userinfo.amount,
                        pendingReward: pendingReward
                    }, ptr);
                    
                })
                .catch(function(err) {
                    setTimeout(function() {
                        getUserInfo(pid, poolAddress, callback, ptr);
                    }, 3000);
                });
            })
            .catch(function(err) {
                setTimeout(function() {
                    getUserInfo(pid, poolAddress, callback, ptr);
                }, 3000);
            });
    };

    var approve = function (tokenAddress, poolAddress, callback, ptr) {

        var token = new web3.eth.Contract(erc20ABI, tokenAddress, {
            from: accountAddress
        });
        
        token.methods.approve(poolAddress, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({
            from: accountAddress,
            gas: "100000",
            value: "0"
        })
            .once("transactionHash", function(hash) {

            })
            .then(function(receipt) {
                callback(true, ptr);
            })
            .catch(function(error) {
                callback(false, ptr);
            });
    };

    setInterval(function() {

        if (false === isAccountInit && null !== web3) {

            var pools = document.querySelectorAll(".pool");
            for(var i = 0; i < pools.length; i++) {

                var pid = $(pools[i]).attr("data-pool-id");
                var poolAddress = $(pools[i]).attr("data-pool");

                getUserInfo(pid, poolAddress, function(data, ptr) {

                    var poolitem = ptr;
                    var pid = $(ptr).attr("data-pool-id");
                    var coinAddress = $(ptr).attr("data-coin");
                    var poolAddress = $(ptr).attr("data-pool");

                    if (new BigNumber(data.amount).comparedTo(0) > 0) {

                        var name = $(poolitem).attr("data-name");
                        var amount = new BigNumber(data.amount).div(new BigNumber(10).pow(coinInfo[name].decimals)).toNumber();
                        var pendingReward = new BigNumber(data.pendingReward).div(new BigNumber(10).pow(coinInfo[name].decimals)).toNumber();
                        
                        $(poolitem).find(".pool-reward-value").html(priceFormat(pendingReward));
                        $(poolitem).find(".pool-user-deposit-value").html(priceFormat(amount));

                        var html = '<div class="pool-control-deposit-withdraw">\
                            <button class="pool-control-withdraw-btn" type="button" data-toggle="modal" data-target="#withdraw-modal">取出 '+name+'</button>\
                            <button class="pool-control-deposit-btn" type="button" data-toggle="modal" data-target="#deposit-modal">\
                                <svg viewBox="0 0 24 24" color="#E55268" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"></path></svg>\
                            </button>\
                        </div>';

                        var doc = $(html);
                        doc.find(".pool-control-withdraw-btn")
                            .attr("data-pool-address", poolAddress)
                            .attr("data-pool-id", pid)
                            .attr("data-name", name);

                        doc.find(".pool-control-deposit-btn")
                            .attr("data-pool-address", poolAddress)
                            .attr("data-pool-id", pid)
                            .attr("data-name", name);

                        var node = poolitem.querySelectorAll(".pool-control");
                        $(node).html(doc);

                        if (amount > 0) {
                            $(poolitem).find(".pool-control-withdraw-btn").removeAttr("disabled");
                        }
                    }
                    else {

                        isApprove(coinAddress, poolAddress, "1", function(result, ptr) {

                            if (false === result) {

                                var node = poolitem.querySelectorAll(".pool-control");
                                $(node).html('<button class="pool-control-approve" type="button">批准 ' + $(poolitem).attr("data-name") + '</button>');
                                $(node).find(".pool-control-approve").click(function() {
    
                                    $(this).attr("disabled", "disabled").html("批准中...");
                                    approve(coinAddress, poolAddress, function(result, ptr) {
    
                                        if (result) {
                                            
                                            var name = $(poolitem).attr("data-name");
                                            var html = '<div class="pool-control-deposit-withdraw">\
                                                <button class="pool-control-withdraw-btn" type="button" data-toggle="modal" data-target="#withdraw-modal" disabled="disabled">取出 '+name+'</button>\
                                                <button class="pool-control-deposit-btn" type="button" data-toggle="modal" data-target="#deposit-modal">\
                                                    <svg viewBox="0 0 24 24" color="#E55268" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"></path></svg>\
                                                </button>\
                                            </div>';
            
                                            var doc = $(html);
                                            doc.find(".pool-control-withdraw-btn")
                                                .attr("data-pool-address", poolAddress)
                                                .attr("data-pool-id", pid)
                                                .attr("data-name", name);
            
                                            doc.find(".pool-control-deposit-btn")
                                                .attr("data-pool-address", poolAddress)
                                                .attr("data-pool-id", pid)
                                                .attr("data-name", name);
                    
                                            var node = poolitem.querySelectorAll(".pool-control");
                                            $(node).html(doc);

                                        }
                                        else {
                                            $(ptr).removeAttr("disabled").html('批准 ' + $(poolitem).attr("data-name"));
                                        }
    
                                    }, this);
    
                                });
                            }
                            else {

                                var name = $(poolitem).attr("data-name");
                                var html = '<div class="pool-control-deposit-withdraw">\
                                    <button class="pool-control-withdraw-btn" type="button" data-toggle="modal" data-target="#withdraw-modal" disabled="disabled">取出 '+name+'</button>\
                                    <button class="pool-control-deposit-btn" type="button" data-toggle="modal" data-target="#deposit-modal">\
                                        <svg viewBox="0 0 24 24" color="#E55268" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"></path></svg>\
                                    </button>\
                                </div>';

                                var doc = $(html);
                                doc.find(".pool-control-withdraw-btn")
                                    .attr("data-pool-address", poolAddress)
                                    .attr("data-pool-id", pid)
                                    .attr("data-name", name);

                                doc.find(".pool-control-deposit-btn")
                                    .attr("data-pool-address", poolAddress)
                                    .attr("data-pool-id", pid)
                                    .attr("data-name", name);
        
                                var node = poolitem.querySelectorAll(".pool-control");
                                $(node).html(doc);
                                
                            }
                        });
                    }

                }, pools[i]);
            }

            isAccountInit = true;
        }

    }, 100);

})();

(function() {

    var getUserInfo = function(pid, poolAddress, callback, ptr) {

        var pool = new web3.eth.Contract(singlePoolABI, poolAddress, {
            from: accountAddress
        });

        pool.methods.userInfo(pid, accountAddress).call()
            .then(function(userinfo) {

                pool.methods.pendingReward(pid, accountAddress).call()
                .then(function(pendingReward) {
    
                    callback({
                        amount: userinfo.amount,
                        pendingReward: pendingReward
                    }, ptr);
                    
                })
                .catch(function(err) {
                    setTimeout(function() {
                        getUserInfo(pid, poolAddress, callback, ptr);
                    }, 3000);
                });
            })
            .catch(function(err) {
                setTimeout(function() {
                    getUserInfo(pid, poolAddress, callback, ptr);
                }, 3000);
            });
    };

    var run = function () {

        if (null !== web3) {

            var pools = document.querySelectorAll(".pool");
            for(var i = 0; i < pools.length; i++) {
    
                var pid = $(pools[i]).attr("data-pool-id");
                var poolAddress = $(pools[i]).attr("data-pool");
    
                getUserInfo(pid, poolAddress, function(data, ptr) {
    
                    var poolitem = ptr;
                    var name = $(poolitem).attr("data-name");
                    var amount = new BigNumber(data.amount).div(new BigNumber(10).pow(coinInfo[name].decimals)).toNumber();
                    var pendingReward = new BigNumber(data.pendingReward).div(new BigNumber(10).pow(coinInfo[name].decimals)).toNumber();
                    
                    $(poolitem).find(".pool-reward-value").html(priceFormat(pendingReward));
                    $(poolitem).find(".pool-user-deposit-value").html(priceFormat(amount));

                    if (0 == amount) {
                        $(poolitem).find(".pool-control-withdraw-btn").Attr("disabled", "disabled");
                    }
    
                }, pools[i]);
            }
        }
    };

    setInterval(run, 1000 * 10);
    run();
})();

(function() {

    $('#deposit-modal').on('show.bs.modal', function (event) {
        
        var pid = $(event.relatedTarget).attr("data-pool-id");
        var address = $(event.relatedTarget).attr("data-pool-address");
        var name = $(event.relatedTarget).attr("data-name");

        var getUserInfo = function(callback) {
    
            var token = new web3.eth.Contract(erc20ABI, coinInfo[name].address, {
                from: accountAddress
            });
    
            token.methods.balanceOf(accountAddress).call()
                .then(function(amount) {
                    callback(amount);
                })
                .catch(function(err) {
                    setTimeout(function() {
                        getUserInfo(callback);
                    }, 3000);
                });
        };

        var deposit = function(pid, poolAddress, amount, callback) {

            var pool = new web3.eth.Contract(singlePoolABI, poolAddress, {
                from: accountAddress
            });
            
            pool.methods.deposit(pid, amount).send({
                from: accountAddress,
                gas: "1000000",
                value: "0"
            })
                .once("transactionHash", function(hash) {

                })
                .then(function(receipt) {
                    callback(true);
                })
                .catch(function(error) {
                    callback(false);
                });
            
        };

        var isApprove = function(tokenAddress, poolAddress, amount, callback) {

            var token = new web3.eth.Contract(erc20ABI, tokenAddress, {
                from: accountAddress
            });

            token.methods.allowance(accountAddress, poolAddress).call()
                .then(function(data){

                    if (new BigNumber(data).comparedTo(new BigNumber(amount)) >= 0) {
                        callback(true);
                    }
                    else {
                        callback(false);
                    }

                })
                .catch(function(err) {
                    setTimeout(function() {
                        isApprove(tokenAddress, poolAddress, amount, callback);
                    }, 3000);
                });

        };

        var approve = function (tokenAddress, poolAddress, callback) {

            var token = new web3.eth.Contract(erc20ABI, tokenAddress, {
                from: accountAddress
            });
            
            token.methods.approve(poolAddress, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({
                from: accountAddress,
                gas: "100000",
                value: "0x0"
            })
                .once("transactionHash", function(hash) {
    
                })
                .then(function(receipt) {
                    callback(true);
                })
                .catch(function(error) {
                    callback(false);
                });
    
        };

        $(".deposit-modal-header-title").html("存入 " + name);
        $(".deposit-modal-deposit-tip").html("可存入 0.000 " + name);
        $(".deposit-modal-right-symbol").html(name);
        $(".deposit-modal-btn").removeAttr("disabled").removeAttr("data-approve").html("确认");
        $(".deposit-modal-input").attr("data-max", "0").val("");

        getUserInfo(function(data) {
            $(".deposit-modal-input").attr("data-max", data);
            var amount = new BigNumber(data).div(new BigNumber(10).pow(coinInfo[name].decimals)).toNumber();
            $(".deposit-modal-deposit-tip").html("可存入 " + priceFormat(amount) + " " + name);
        });

        $(".deposit-modal-right-max").off('click').on('click',function() {
            var amount = new BigNumber($(".deposit-modal-input").attr("data-max")).div(new BigNumber(10).pow(coinInfo[name].decimals)).toNumber();
            amount = Math.floor(amount * 100000000) /100000000;
            $(".deposit-modal-input").val(amount);
        });

        $(".deposit-modal-btn").off('click').on('click',function() {

            if ("true" == $(".deposit-modal-btn").attr("data-approve")) {
                $(".deposit-modal-btn").attr("disabled", "disabled").html("正在批准中...");
                approve(coinInfo[name].address, address, function(result) {

                    if (false == result) {
                        $(".deposit-modal-btn").removeAttr("disabled").html("批准 " + name);
                    }
                    else {
                        $(".deposit-modal-btn").removeAttr("data-approve");
                        $(".deposit-modal-btn").removeAttr("disabled").html("确认");
                    }

                });
                return;
            }

            var amount = $(".deposit-modal-input").val();
            if ("Max" !== amount && !amount.match(/^[0-9][\.0-9]*$/)) {
                alert("请输入正确的数值");
                return;
            }

            amount = new BigNumber(amount).multipliedBy(new BigNumber(10).pow(coinInfo[name].decimals)).toFixed(0);
            $(".deposit-modal-btn").attr("disabled", "disabled").html("正在存入中...");
            isApprove(coinInfo[name].address, address, amount, function(result) {

                if (false === result) {

                    $(".deposit-modal-btn").attr("data-approve", "true");
                    $(".deposit-modal-btn").removeAttr("disabled").html("批准 " + name);
                }
                else {

                    deposit(pid, address, amount, function(result) {

                        if (result) {
                            $(".deposit-modal-header-close").trigger("click");
                        }
                        else {
                            $(".deposit-modal-btn").removeAttr("disabled").html("确认");
                            alert("存入失败");
                        }
                        
                    });

                }

            });

        });

    })

})();

(function() {

    $('#withdraw-modal').on('show.bs.modal', function (event) {
        
        var pid = $(event.relatedTarget).attr("data-pool-id");
        var address = $(event.relatedTarget).attr("data-pool-address");
        var name = $(event.relatedTarget).attr("data-name");

        var withdraw = function (pid, poolAddress, amount, max, callback) {

            var pool = new web3.eth.Contract(singlePoolABI, poolAddress, {
                from: accountAddress
            });
            
            if (max) {

                pool.methods.withdrawAll(pid).send({
                    from: accountAddress,
                    gas: "1000000",
                    value: "0x0"
                })
                    .once("transactionHash", function(hash) {

                    })
                    .then(function(receipt) {
                        callback(true);
                    })
                    .catch(function(error) {
                        callback(false);
                    });
            }
            else {

                pool.methods.withdraw(pid, amount).send({
                    from: accountAddress,
                    gas: "1000000",
                    value: "0x0"
                })
                    .once("transactionHash", function(hash) {

                    })
                    .then(function(receipt) {
                        callback(true);
                    })
                    .catch(function(error) {
                        callback(false);
                    });
            }

        };

        var getUserInfo = function(pid, poolAddress, callback) {
    
            var pool = new web3.eth.Contract(singlePoolABI, poolAddress, {
                from: accountAddress
            });
    
            pool.methods.userInfo(pid, accountAddress).call()
                .then(function(userinfo) {
    
                    pool.methods.pendingReward(pid, accountAddress).call()
                    .then(function(pendingReward) {
    
                        callback({
                            amount: userinfo.amount,
                            pendingReward: pendingReward
                        });
                        
                    })
                    .catch(function(err) {
                        setTimeout(function() {
                            getUserInfo(pid, poolAddress, callback);
                        }, 3000);
                    });
                })
                .catch(function(err) {
                    setTimeout(function() {
                        getUserInfo(pid, poolAddress, callback);
                    }, 3000);
                });
        };

        $(".withdraw-modal-header-title").html("取回 " + name);
        $(".withdraw-modal-deposit-tip").html("可取回 0.000 " + name);
        $(".withdraw-modal-right-symbol").html(name);
        $(".withdraw-modal-input").removeAttr("data-max").val("");
        $(".withdraw-modal-btn").removeAttr("disabled").html("确认");

        getUserInfo(pid, address, function(data) {
            var amount = new BigNumber(data.amount).div(new BigNumber(10).pow(coinInfo[name].decimals)).toNumber();
            var pendingReward = new BigNumber(data.pendingReward).div(new BigNumber(10).pow(coinInfo[name].decimals)).toNumber();
            $(".withdraw-modal-deposit-tip").html("可取回 " + priceFormat(amount + pendingReward) + " " + name);
        });

        $(".withdraw-modal-right-max").off('click').on('click',function() {
            $(".withdraw-modal-input").attr("data-max", "true").val("Max");
        });

        $(".withdraw-modal-btn").off('click').on('click',function() {

            var amount = $(".withdraw-modal-input").val();
            if ("Max" !== amount && !amount.match(/^[0-9][\.0-9]*$/)) {
                alert("请输入正确的数值");
                return;
            }

            amount = new BigNumber(amount).multipliedBy(new BigNumber(10).pow(coinInfo[name].decimals)).toFixed(0);
            var max = $(".withdraw-modal-input").attr("data-max");

            $(".withdraw-modal-btn").attr("disabled", "disabled").html("正在取回中...");
            withdraw(pid, address, amount, "true" === max ? true: false, function(result) {

                if (result) {
                    $(".withdraw-modal-header-close").trigger("click");
                }
                else {
                    $(".withdraw-modal-btn").removeAttr("disabled").html("确认");
                    alert("取回失败");
                }
                
            });

        });

    })

})();