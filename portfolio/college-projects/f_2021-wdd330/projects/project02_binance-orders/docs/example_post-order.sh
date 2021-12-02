# !/usr/bin/env bash

# Set up authentication:
apiKey="sD1SVM9I1sHCHlRuZzQECzRjyAJECMWRq9kolCm6IfgszKGBbTX4WFlazHl3Fpv8"

# Set up the request:
apiMethod="POST"
apiCall="v3/order"
apiParams="symbol=BTCUSDT&side=SELL&type=LIMIT&timeInForce=GTC&quantity=1&price=0.2&recvWindow=5000"


function rawurlencode {
    local value="$1"
    local len=${#value}
    local encoded=""
    local pos c o

    for (( pos=0 ; pos<len ; pos++ ))
    do
        c=${value:$pos:1}
        case "$c" in
            [-_.~a-zA-Z0-9] ) o="${c}" ;;
            * )   printf -v o '%%%02x' "'$c"
        esac
        encoded+="$o"
    done

    echo "$encoded"
}

ts=$(date +%s000)
paramsWithTs="$apiParams&timestamp=$ts"

rawSignature=$(echo -n "$paramsWithTs" \
               | openssl dgst -keyform PEM -sha256 -sign ./test-prv-key.pem \
               | openssl enc -base64 \
               | tr -d '\n')
signature=$(rawurlencode "$rawSignature")

curl --silent -H "X-MBX-APIKEY: $apiKey" \
     -X $apiMethod "https://testnet.binance.vision/api/$apiCall?$paramsWithTs&signature=$signature"