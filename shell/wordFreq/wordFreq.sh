cat words.txt | tr ' ' '\n' | grep -v '^$' | sort | uniq -c | sort -r  | awk '{print $2" "$1 }'
