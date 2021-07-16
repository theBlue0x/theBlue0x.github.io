var Constants = (function(Constants, $, undefined) {

  Constants.isTestnet = false;

  var mainnetCoinoUsdAssetId = '12982485703607823902';
  var testnetCoinoUsdAssetId = '9429933812817993614';
  Constants.coinoUsdAssetId = mainnetCoinoUsdAssetId;

  if(Constants.isTestnet)
  {
    Constants.coinoUsdAssetId = testnetCoinoUsdAssetId;
  }

  Constants.coinoUsdAssetName = "a:" + Constants.coinoUsdAssetId;

  Constants.nxtpassApiUrl = '';

  // 2 weeks default listing duration
  Constants.listingDurationDefault = 2 * 7 * 24 * 60 * 60;
  // 4 weeks extended listing duration
  Constants.listingDurationExtended = 4 * 7 * 24 * 60 * 60;
  // listing fees (for information only)
  Constants.listingFeeDefault = 0;
  Constants.listingFeeExtended = 0;

  return Constants;
} (Constants || {}, jQuery));
