
vows = ./node_modules/vows/bin/vows

test:
		@${vows} --spec test/*.js

.PHONY: test