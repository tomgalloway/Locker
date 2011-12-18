module.exports = {
    handler : function (host, apiKeys, done, req, res) {
        require('./twitter_client')(apiKeys.appKey, apiKeys.appSecret, host + "auth/twitter/auth")
        .getAccessToken(req, res, function(err, newToken) {
            if(err) return done(err);
            if(!newToken) return done(new Error("token missing"));
            done(null, {
                appKey : apiKeys.appKey,
                appSecret : apiKeys.appSecret,
                token : newToken
            });
        });
    }
}